import React, { useState } from 'react';
import authService from './services/authService';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/styles.css';

function RegisterForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        authService.registerUser(email, name, password)
            .then(response => {
                setLoading(false);
                if (response.success) {
                    navigate('/login');
                } else {
                    setErrorMessage(response.message);
                }
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(error.message);
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="show-password-container">
                    <input
                        type="checkbox"
                        id="show-password"
                        checked={showPassword}
                        onChange={togglePasswordVisibility}
                    />
                    <label htmlFor="show-password">Show password</label>
                </div>
            </div>
            <button className='button-form' type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Register'}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}

export default RegisterForm;