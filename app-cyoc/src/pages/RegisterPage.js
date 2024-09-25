import React from 'react';
import RegisterForm from '../Components/RegisterForm';
import { authService } from '../Components/services/authService';

function RegisterPage() {
    const handleRegister = (email, name, password) => {
        authService.registerUser(email, name, password)
            .then((response) => {
                if (response.success) {
                    console.log('Usuario registrado con éxito');
                } else {
                    console.error('Error en el registro:', response.message);
                }
            })
            .catch((error) => {
                console.error('Error inesperado en el registro:', error);
            });
    };

    return (
        <div className='login-page-container'>
        <div className='login-page'>
            <h2>Register Here</h2>
            <RegisterForm onSubmit={handleRegister} />
        </div>
        </div>
    );
}

export default RegisterPage;
