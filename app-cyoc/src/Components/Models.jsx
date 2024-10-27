import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const openDatabase = async () => {
  return open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
};

export const guardarModelo = async (usuario_id, creator_id, nombre, chasis, ruedas, motor, color) => {
  const db = await openDatabase();
  await db.run(`
    INSERT INTO modelos (usuario_id, creator_id, nombre, chasis, ruedas, motor, color)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [usuario_id, creator_id, nombre, chasis, ruedas, motor, color]
  );
  await db.close();
};

export const obtenerModelosPorUsuario = async (usuario_id) => {
  const db = await openDatabase();
  const modelos = await db.all('SELECT * FROM modelos WHERE usuario_id = ?', [usuario_id]);
  await db.close();
  return modelos;
};
