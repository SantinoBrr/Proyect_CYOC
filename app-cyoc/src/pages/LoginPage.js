import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

function LoginPage() {
    return (
        <div className='login-page-container'>
            <video autoPlay loop muted className="background-video">
                <source src={require('../assets/videos/Fondo-Login.mp4')} type="video/mp4" />
                Tu navegador no soporta el video.
            </video>
            <div className='login-page'>
                <h2>Login Here</h2>
                <LoginForm />
                <p className='login-to-register'>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;
