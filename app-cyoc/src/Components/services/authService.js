let currentUser = null; // Define currentUser aquí

export const authService = {
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
                console.log('Login successful');
                currentUser = { email: data.email, name: data.name }; // Actualiza currentUser
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
    },

    isAuthenticated: () => {
        return currentUser !== null;
    },

    getCurrentUser: () => {
        return currentUser;
    }
};

export default authService;
