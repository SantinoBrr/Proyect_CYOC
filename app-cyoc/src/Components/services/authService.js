export const authService = {
    login: async (email, password) => {
        const db = await dbPromise;
        const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

        if (user && user.password === password) {
            currentUser = { email: user.email, name: user.name }; 
            console.log('Login successful');
            return { success: true, email: user.email, name: user.name };
        } else {
            console.log('Invalid email or password');
            return { success: false, message: 'Invalid email or password' };
        }
    },

    registerUser: async (email, name, password) => {
        const db = await dbPromise;
        try {
            await db.run('INSERT INTO users (email, name, password) VALUES (?, ?, ?)', [email, name, password]);
            console.log('User registered:', { email, name });
            return { success: true };
        } catch (error) {
            console.log('Error registering user:', error.message);
            return { success: false, message: 'Email already in use or invalid data' };
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
