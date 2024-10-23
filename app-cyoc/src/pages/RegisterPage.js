import React from 'react';
import { Link } from 'react-router-dom';
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
            <video autoPlay loop muted className="background-video">
                <source src={require('../assets/videos/Fondo-Register.mp4')} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            <h2>Register Here</h2>
            <RegisterForm onSubmit={handleRegister} />
            <p className='login-to-register'>
                Do you already have an account? <Link to="/login">Login here</Link>
                </p>
        </div>
        </div>
    );
}

export default RegisterPage;
