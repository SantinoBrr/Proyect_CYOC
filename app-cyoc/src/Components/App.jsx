import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import BuscarModelos from './components/BuscarModelos';
import MisModelos from './components/MisModelos';
import { UserProvider, useUser } from './UserContext';

const App = () => {
    const [currentPage, setCurrentPage] = useState('register');

    const renderPage = () => {
        if (currentPage === 'register') {
            return <RegisterPage />;
        } else if (currentPage === 'login') {
            return <LoginPage />;
        }
        return null;
    };

    
    const user = { id: 123 };
    const userID = user.id;

    return (
        <UserProvider user={user}> 
            <Router>
                <div>
                    <nav>
                        <button onClick={() => setCurrentPage('register')}>Registro</button>
                        <button onClick={() => setCurrentPage('login')}>Iniciar Sesión</button>
                    </nav>
                    {renderPage()}
                    <Switch>
                        <Route path="/buscar-modelos">
                            <BuscarModelos />
                        </Route>
                        <Route path="/mis-modelos">
                            <MisModelos userID={userID} />
                        </Route>
                        {/* Otras rutas */}
                    </Switch>
                </div>
            </Router>
        </UserProvider>
    );
};

export default App;
