const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('./db'); 
const cors = require('cors'); 


const app = express();


app.use(cors()); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.get('/', (req, res) => {
  res.send('Bienvenido a la API de registro e inicio de sesión.');
});


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
      if (err) {
        return res.status(500).json({ success: false, message: 'Error al comparar la contraseña.' });
      }

      if (esIgual) {
        res.json({ success: true, message: 'Inicio de sesión exitoso.', email: usuario.correo, name: usuario.nombre });
      } else {
        res.status(401).json({ success: false, message: 'Contraseña incorrecta.' });
      }
    });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
