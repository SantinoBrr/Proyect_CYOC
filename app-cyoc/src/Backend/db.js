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

db.run(`CREATE TABLE IF NOT EXISTS modelos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  chasis TEXT,
  ruedas TEXT,
  motor TEXT,
  color TEXT,
  creador_id INTEGER,
  FOREIGN KEY (creador_id) REFERENCES usuarios(id)
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

const addModel = (nombre, chasis, ruedas, motor, color, creador_id, callback) => {
  db.run(
    `INSERT INTO modelos (nombre, chasis, ruedas, motor, color, creador_id) VALUES (?, ?, ?, ?, ?, ?)`,
    [nombre, chasis, ruedas, motor, color, creador_id],
    function (err) {
      callback(err, this.lastID);
    }
  );
};

const getAllModels = (callback) => {
  db.all(`SELECT * FROM modelos`, [], (err, rows) => {
    if (err) {
      console.error('Error al obtener los modelos:', err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

const getModelsByCreator = (creador_id, callback) => {
  db.all(`SELECT * FROM modelos WHERE creador_id = ?`, [creador_id], (err, rows) => {
    if (err) {
      console.error('Error al obtener los modelos del usuario:', err.message);
      callback(err);
    } else {
      callback(null, rows);
    }
  });
};

const deleteModelById = (id, callback) => {
  db.run(`DELETE FROM modelos WHERE id = ?`, [id], function (err) {
    if (err) {
      console.error('Error al eliminar el modelo:', err.message);
      callback(err);
    } else if (this.changes === 0) {
      console.log('No se encontró ningún modelo con ese ID.');
      callback(null, 'No se encontró ningún modelo con ese ID.');
    } else {
      console.log(`Modelo con ID ${id} eliminado.`);
      callback(null, 'Modelo eliminado');
    }
  });
};

module.exports = {
  db,
  addUser,
  deleteUserByName,
  getAllUsers,
  getUserByEmail,
  addModel,
  getAllModels,
  getModelsByCreator,
  deleteModelById
};
