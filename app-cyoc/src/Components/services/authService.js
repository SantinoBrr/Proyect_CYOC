let currentUser = null;

export const authService = {
    login: (email, password) => {
        const defaultEmail = 'santinodarioscotton@gmail.com';
        const defaultPassword = 'CYOC2024';

        if (email === defaultEmail && password === defaultPassword) {
            currentUser = { email: defaultEmail, name: 'Test User' }; 
            console.log('Login successful with default credentials');
            return Promise.resolve({ success: true, email: defaultEmail, name: 'Test User' });
        } else {
            console.log('Invalid email or password');
            return Promise.resolve({ success: false, message: 'Invalid email or password' });
        }
    },

    isAuthenticated: () => {
        return currentUser !== null;
    }
};

export default authService;
