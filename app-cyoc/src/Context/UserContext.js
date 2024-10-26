import React, { createContext, useContext, useEffect, useState } from 'react';
import authService from '../Components/services/authService'; 

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(authService.getCurrentUser());

    useEffect(() => {
        if (authService.isAuthenticated()) {
            setUser(authService.getCurrentUser());
        }
    }, []);

    const login = async (email, password) => {
        const response = await authService.login(email, password);
        if (response.success) {
            setUser(authService.getCurrentUser());
        }
        return response;
    };

    const logout = () => {
        authService.logout();
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
