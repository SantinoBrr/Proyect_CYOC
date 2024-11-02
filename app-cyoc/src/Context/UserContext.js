// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../Components/services/authService';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {
        const response = await authService.login(credentials.email, credentials.password);
        if (response.success) {
            // Agregamos userID al estado del usuario
            setUser({ email: response.email, name: response.name, userID: response.userID });
        }
        return response;
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    useEffect(() => {
        const currentUser = authService.getCurrentUser();
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
