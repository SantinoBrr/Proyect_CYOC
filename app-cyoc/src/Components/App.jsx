// src/App.js
import React, { useState } from 'react';
import RegisterPage from './components/register';
import LoginPage from './components/login';

const App = () => {
  const [currentPage, setCurrentPage] = useState('register');

  const renderPage = () => {
    if (currentPage === 'register') {
      return <RegisterPage />;
    } else if (currentPage === 'login') {
      return <LoginPage />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('register')}>Registro</button>
        <button onClick={() => setCurrentPage('login')}>Iniciar Sesión</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
