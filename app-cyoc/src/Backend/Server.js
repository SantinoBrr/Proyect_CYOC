const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db'); 
const cors = require('cors');
const path = require('path');
const fs = require('fs'); // Agregar el módulo fs para manejar archivos

const app = express();

// Función para escribir en el archivo de logs
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

// Rutas de la API
app.post('/register', (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  if (!nombre || !correo || !contraseña) {
    const message = 'Por favor, completa todos los campos.';
    logMessage(message); // Log del mensaje
    return res.status(400).json({ success: false, message });
  }

  const saltRounds = 10;
  bcrypt.hash(contraseña, saltRounds, (err, hash) => {
    if (err) {
      const message = 'Error al hashear la contraseña.';
      logMessage(message); // Log del mensaje
      return res.status(500).json({ success: false, message });
    }

    db.run(`INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)`,
      [nombre, correo, hash],
      (err) => {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            const message = 'El correo ya está registrado.';
            logMessage(message); // Log del mensaje
            return res.status(400).json({ success: false, message });
          }
          const message = 'Error al registrar el usuario.';
          logMessage(message); // Log del mensaje
          return res.status(500).json({ success: false, message });
        }
        const message = 'Usuario registrado con éxito.';
        logMessage(message); // Log del mensaje
        res.json({ success: true, message });
      }
    );
  });
});

app.post('/login', (req, res) => {
  const { correo, contraseña } = req.body;

  db.get('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, usuario) => {
    if (err) {
      const message = 'Error en el servidor.';
      logMessage(message); // Log del mensaje
      return res.status(500).json({ success: false, message });
    }
    if (!usuario) {
      const message = 'Usuario no encontrado.';
      logMessage(message); // Log del mensaje
      return res.status(400).json({ success: false, message });
    }

    bcrypt.compare(contraseña, usuario.contraseña, (err, esIgual) => {
      if (err) {
        const message = 'Error al comparar la contraseña.';
        logMessage(message); // Log del mensaje
        return res.status(500).json({ success: false, message });
      }

      if (esIgual) {
        const message = 'Inicio de sesión exitoso.';
        logMessage(`Usuario ${usuario.correo} ha iniciado sesión correctamente.`); // Log exitoso
        res.json({ success: true, message, email: usuario.correo, name: usuario.nombre });
      } else {
        const message = 'Contraseña incorrecta.';
        logMessage(message); // Log del mensaje
        res.status(401).json({ success: false, message });
      }
    });
  });
});

// Configura Express para servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../build')));

// Maneja cualquier ruta que no coincida con tus API y devuelve el archivo HTML de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'asset-manifest.json'));
});

// Inicia el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  const message = `Servidor escuchando en http://localhost:${PORT}`;
  logMessage(message); // Log del inicio del servidor
  console.log(message);
});
