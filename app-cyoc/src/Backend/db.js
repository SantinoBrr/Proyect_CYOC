const sqlite3 = require('sqlite3').verbose();

// Abrir o crear la base de datos
const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
  }
});

// Crear la tabla de usuarios si no existe
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  correo TEXT UNIQUE NOT NULL,
  contraseña TEXT NOT NULL
)`);

module.exports = db;
