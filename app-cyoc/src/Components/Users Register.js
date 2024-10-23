const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    
    db.run(sql, [username, email, password], function(err) {
        if (err) {
            return res.status(400).send('Error al registrar el usuario');
        }
        res.status(201).send('Usuario registrado con éxito');
    });
});


app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
