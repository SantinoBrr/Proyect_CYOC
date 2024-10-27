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


const addUser = (nombre, correo, contraseña, callback) => {
  db.run(
    `INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)`,
    [nombre, correo, contraseña],
    function (err) {
      callback(err, this.lastID);
    }
  );
};


const deleteUserByName = (nombre, callback) => {
  db.run(
    `DELETE FROM usuarios WHERE nombre = ?`,
    [nombre],
    function (err) {
      if (err) {
        console.error('Error al eliminar el usuario:', err.message);
        callback(err);
      } else if (this.changes === 0) {
        console.log('No se encontró ningún usuario con ese nombre.');
        callback(null, 'No se encontró ningún usuario con ese nombre.');
      } else {
        console.log(`Usuario ${nombre} eliminado.`);
        callback(null, 'Usuario eliminado');
      }
    }
  );
};


const getAllUsers = (callback) => {
  db.all(`SELECT * FROM usuarios`, [], (err, rows) => {
    if (err) {
      console.error('Error al obtener los usuarios:', err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};


const getUserByEmail = (correo, callback) => {
  db.get(`SELECT * FROM usuarios WHERE correo = ?`, [correo], (err, row) => {
    if (err) {
      console.error('Error al obtener el usuario:', err.message);
      callback(err);
    } else {
      callback(null, row);
    }
  });
};


module.exports = {
  db,
  addUser,
  deleteUserByName,
  getAllUsers,
  getUserByEmail
};
