import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const dbPromise = open({
    filename: 'database.db',
    driver: sqlite3.Database
});

const initDb = async () => {
    const db = await dbPromise;
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        name TEXT,
        password TEXT
    )`);
};

initDb();
