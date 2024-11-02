const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

// Función para registrar mensajes en un archivo de logs
const logMessage = (message) => {
    const log = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFile('server.log', log, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de logs:', err);
        }
    });
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para registro de usuarios
app.post('/register', (req, res) => {
    const { nombre, correo, contraseña } = req.body;

    if (!nombre || !correo || !contraseña) {
        const message = 'Por favor, completa todos los campos.';
        logMessage(message);
        return res.status(400).json({ success: false, message });
    }

    const saltRounds = 10;
    bcrypt.hash(contraseña, saltRounds, (err, hash) => {
        if (err) {
            const message = 'Error al hashear la contraseña.';
            logMessage(message);
            return res.status(500).json({ success: false, message });
        }

        db.run(`INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)`,
            [nombre, correo, hash],
            (err) => {
                if (err) {
                    if (err.message.includes('UNIQUE')) {
                        const message = 'El correo ya está registrado.';
                        logMessage(message);
                        return res.status(400).json({ success: false, message });
                    }
                    const message = 'Error al registrar el usuario.';
                    logMessage(message);
                    return res.status(500).json({ success: false, message });
                }
                const message = 'Usuario registrado con éxito.';
                logMessage(message);
                res.json({ success: true, message });
            }
        );
    });
});

// Ruta para inicio de sesión de usuarios
app.post('/login', (req, res) => {
    const { correo, contraseña } = req.body;

    db.get('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, usuario) => {
        if (err) {
            const message = 'Error en el servidor.';
            logMessage(message);
            return res.status(500).json({ success: false, message });
        }
        if (!usuario) {
            const message = 'Usuario no encontrado.';
            logMessage(message);
            return res.status(400).json({ success: false, message });
        }

        bcrypt.compare(contraseña, usuario.contraseña, (err, esIgual) => {
            if (err) {
                const message = 'Error al comparar la contraseña.';
                logMessage(message);
                return res.status(500).json({ success: false, message });
            }

            if (esIgual) {
                const message = 'Inicio de sesión exitoso.';
                logMessage(`Usuario ${usuario.correo} ha iniciado sesión correctamente.`);
                res.json({ success: true, message, email: usuario.correo, name: usuario.nombre });
            } else {
                const message = 'Contraseña incorrecta.';
                logMessage(message);
                res.status(401).json({ success: false, message });
            }
        });
    });
});

// Ruta para obtener los modelos de un usuario
app.get('/api/MyModels', (req, res) => {
    const userEmail = req.query.user_email;

    if (!userEmail) {
        const message = 'El correo del usuario es necesario para obtener los modelos.';
        logMessage(message);
        return res.status(400).json({ success: false, message });
    }

    db.all(`SELECT * FROM modelos WHERE user_email = ?`, [userEmail], (err, modelos) => {
        if (err) {
            const message = 'Error al obtener los modelos.';
            logMessage(message);
            return res.status(500).json({ success: false, message });
        }

        res.json({ success: true, modelos });
    });
});

app.post('/api/models', (req, res) => {
  const { name, description, chassis, wheels, engine, color } = req.body;

  // Validar campos requeridos
  if (!name || !description || !chassis || wheels == null || !engine || !color) {
    const message = 'Faltan datos requeridos para el modelo.';
    console.log(message); // Cambié logMessage por console.log para simplificar
    return res.status(400).json({ success: false, message });
  }

  db.run(`INSERT INTO car_models (name, description, chassis, wheels, engine, color) VALUES (?, ?, ?, ?, ?, ?)`,
    [name, description, chassis, wheels, engine, color],
    function (err) {
      if (err) {
        const message = 'Error al guardar el modelo.';
        console.log(message);
        return res.status(500).json({ success: false, message });
      }

      const message = 'Modelo guardado con éxito.';
      console.log(`Modelo guardado: ${name}`);
      res.json({ success: true, message, modelId: this.lastID });
    }
  );
});
// Ruta para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
