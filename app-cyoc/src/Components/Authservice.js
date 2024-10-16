import axios from 'axios';

export const authService = {
    registerUser: async (email, name, password) => {
        try {
            // Hacemos la solicitud POST al backend
            const response = await axios.post('http://localhost:3001/register', {
                email,
                Username,
                password
            });
            // Devolvemos la respuesta del servidor
            return response.data;  
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    }
};
