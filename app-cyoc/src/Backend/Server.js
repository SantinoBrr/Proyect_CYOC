const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión con la base de datos SQLite
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, name TEXT, password TEXT)');
    }
});

// Ruta para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;

    
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (row) {
            return res.status(400).json({ success: false, message: 'Email already registered' });
        } else {
            
            const hashedPassword = bcrypt.hashSync(password, 10);
            db.run('INSERT INTO users (email, name, password) VALUES (?, ?, ?)', [email, name, hashedPassword], (err) => {
                if (err) {
                    return res.status(500).json({ success: false, message: 'Error registering user' });
                }
                return res.json({ success: true, message: 'User registered successfully' });
            });
        }
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
