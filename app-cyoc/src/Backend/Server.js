const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db');  // Asegúrate de que este archivo esté correctamente configurado
const cors = require('cors'); // Agrega esta línea para permitir CORS

// Inicializa la aplicación de Express
const app = express();

// Middleware para habilitar CORS
app.use(cors()); // Habilitar CORS
// Middleware para analizar el cuerpo de las solicitudes POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de inicio para mostrar el formulario de registro
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de registro e inicio de sesión.');
});

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({ success: false, message: 'Por favor, completa todos los campos.' });
  }

  const saltRounds = 10;
  bcrypt.hash(contraseña, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error al hashear la contraseña.' });
    }

    db.run(`INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)`,
      [nombre, correo, hash],
      (err) => {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ success: false, message: 'El correo ya está registrado.' });
          }
          return res.status(500).json({ success: false, message: 'Error al registrar el usuario.' });
        }
        res.json({ success: true, message: 'Usuario registrado con éxito.' });
      }
    );
  });
});

// Ruta para manejar el inicio de sesión de usuarios
app.post('/login', (req, res) => {
  const { correo, contraseña } = req.body;

  db.get('SELECT * FROM usuarios WHERE correo = ?', [correo], (err, usuario) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error en el servidor.' });
    }
    if (!usuario) {
      return res.status(400).json({ success: false, message: 'Usuario no encontrado.' });
    }

    bcrypt.compare(contraseña, usuario.contraseña, (err, esIgual) => {
      if (esIgual) {
        res.json({ success: true, message: 'Inicio de sesión exitoso.', email: usuario.correo, name: usuario.nombre });
      } else {
        res.status(401).json({ success: false, message: 'Contraseña incorrecta.' });
      }
    });
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
