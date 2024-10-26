import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../Components/services/authService'; // Asegúrate de que la ruta sea correcta

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        const response = await authService.login(credentials.email, credentials.password);
        if (response.success) {
            setUser({ email: response.email, name: response.name }); // Solo actualiza si el login es exitoso
        }
        return response; // Devuelve la respuesta para manejarla en el LoginForm
    };

    const logout = () => {
        authService.logout();
        setUser(null); // Elimina el usuario del estado
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    useEffect(() => {
        const currentUser = authService.getCurrentUser(); // Verifica la sesión al cargar la aplicación
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
