const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db'); 
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
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

// Registro de usuarios
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

// Inicio de sesión
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
        res.json({ success: true, message, email: usuario.correo, name: usuario.nombre, userID: usuario.id });
      } else {
        const message = 'Contraseña incorrecta.';
        logMessage(message); 
        res.status(401).json({ success: false, message });
      }
    });
  });
});

// Obtener modelos del usuario
app.get('/api/MyModels', (req, res) => {
  const userID = req.query.userID;

  if (!userID) {
    return res.status(400).json({ success: false, message: 'Se requiere el userID.' });
  }

  db.all('SELECT * FROM models WHERE user_id = ?', [userID], (err, rows) => {
    if (err) {
      const message = 'Error al buscar los modelos.';
      logMessage(message);
      return res.status(500).json({ success: false, message });
    }
    res.json(rows);
  });
});

// Buscar modelos por nombre
app.get('/api/models', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ success: false, message: 'Se requiere el nombre del modelo.' });
  }

  db.all('SELECT * FROM models WHERE name LIKE ?', [`%${name}%`], (err, rows) => {
    if (err) {
      const message = 'Error al buscar modelos.';
      logMessage(message);
      return res.status(500).json({ success: false, message });
    }
    res.json(rows);
  });
});

// Agregar un nuevo modelo
app.post('/api/models', (req, res) => {
  const { name, description, user_id, chasis, rueda, motor, color } = req.body;

  if (!name || !user_id || !chasis || !rueda || !motor || !color) {
    return res.status(400).json({ success: false, message: 'Faltan datos requeridos para el modelo.' });
  }

  db.run(`INSERT INTO models (name, description, user_id, chasis, rueda, motor, color) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, description, user_id, chasis, rueda, motor, color],
    function(err) {
      if (err) {
        const message = 'Error al guardar el modelo.';
        logMessage(message);
        return res.status(500).json({ success: false, message });
      }
      res.json({ success: true, message: 'Modelo guardado con éxito', modelId: this.lastID });
    }
  );
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  const message = `Servidor escuchando en http://localhost:${PORT}`;
  logMessage(message); 
  console.log(message);
});
