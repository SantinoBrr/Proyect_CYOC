let currentUser = null; // Variable para almacenar el usuario autenticado

export const authService = {
    login: (email, password) => {
        const defaultEmail = 'santinodarioscotton@gmail.com';
        const defaultPassword = 'CYOC2024';

        // Verificación de credenciales por defecto
        if (email === defaultEmail && password === defaultPassword) {
            currentUser = { email: defaultEmail, name: 'Usuario Prueba' }; // Guardar el usuario
            console.log('Login exitoso con credenciales por defecto');
            return Promise.resolve({ success: true, email: defaultEmail, name: 'Usuario Prueba' }); // Devuelve una promesa
        }

        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                const user = users.find(u => u.email === email);
                const validPassword = "contrasena123";  // Contraseña simulada

                if (user && password === validPassword) {
                    currentUser = { email: user.email, name: user.name }; // Guardar el usuario
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
    },

    registerUser: (email, name, password) => {
        return fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registro exitoso:', data);
            return { success: true, data };
        })
        .catch(error => {
            console.error('Error en el registro:', error.message);
            return { success: false, message: error.message };
        });
    },
    
    isAuthenticated: () => {
        return currentUser !== null; // Devuelve true si hay un usuario autenticado
    }
};

export default authService;
