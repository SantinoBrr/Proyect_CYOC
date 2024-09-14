export const authService = {
    login: (email, password) => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                // JSONPlaceholder no tiene contraseñas, así que simulamos una
                const user = users.find(u => u.email === email);
                const validPassword = "contrasena123";  // Contraseña simulada

                if (user && password === validPassword) {
                    console.log('Login exitoso');
                    return { success: true, email: user.email, name: user.name };
                } else {
                    console.log('Email o contraseña incorrectos');
                    throw new Error('Email o contraseña incorrectos');
                }
            })
            .catch(error => {
                console.error('Error en la autenticación:', error.message);
                return { success: false, message: error.message };
            });
    }
};
