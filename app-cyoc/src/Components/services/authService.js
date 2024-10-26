let currentUser = null; 

const authService = {
    initialize: () => {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const name = localStorage.getItem('name');
        if (token && email && name) {
            currentUser = { email, name };
            console.log('Session loaded:', currentUser);
        }
    },

    login: async (email, password) => {
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo: email, contraseña: password }),
            });

            const data = await response.json();
            if (response.ok) {
                currentUser = { email: data.email, name: data.name };
                localStorage.setItem('token', data.token);
                localStorage.setItem('email', data.email);
                localStorage.setItem('name', data.name);
                console.log('Login successful');
                return { success: true, email: data.email, name: data.name };
            } else {
                console.log('Login failed:', data.message);
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Error in login:', error);
            return { success: false, message: error.message };
        }
    },

    registerUser: async (email, name, password) => {
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ correo: email, nombre: name, contraseña: password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('User registered:', { email, name });
                return { success: true };
            } else {
                console.log('Error registering user:', data.message);
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.error('Error registering user:', error);
            return { success: false, message: error.message };
        }
    },

    logout: () => {
        currentUser = null;
        console.log('User logged out');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('name');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    getCurrentUser: () => {
        return currentUser;
    }
};

authService.initialize(); // Cargar la sesión al iniciar la aplicación

export default authService;
