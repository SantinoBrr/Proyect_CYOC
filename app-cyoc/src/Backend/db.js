const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
  }
});


db.run(`CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  correo TEXT UNIQUE NOT NULL,
  contraseña TEXT NOT NULL
)`);


db.run(`CREATE TABLE IF NOT EXISTS models (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  user_id INTEGER,
  chasis TEXT NOT NULL,
  rueda TEXT NOT NULL,
  motor TEXT NOT NULL,
  color TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES usuarios(id)
)`);

module.exports = db;
