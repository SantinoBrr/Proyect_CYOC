app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

    db.get(sql, [username, password], (err, row) => {
        if (err) {
            return res.status(400).send('Error al iniciar sesión');
        }
        if (!row) {
            return res.status(401).send('Usuario o contraseña incorrectos');
        }
        res.status(200).send('Inicio de sesión exitoso');
    });
});
