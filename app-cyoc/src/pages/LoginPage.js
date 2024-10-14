import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';

function LoginPage() {
    return (
        <div className='login-page-container'>
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
