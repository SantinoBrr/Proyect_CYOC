import React, { useState } from 'react';
import authService from './services/authService'; 
import { useNavigate } from 'react-router-dom';
import '../assets/styles/styles.css';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        setTimeout(() => {
            authService.login(email, password)
                .then(response => {
                    setLoading(false);
                    if (response.success) {
                        navigate('/create-car'); 
                    } else {
                        setErrorMessage(response.message);
                    }
                })
                .catch(error => {
                    setLoading(false);
                    setErrorMessage(error.message);
                });
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button className='button-form' type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </button>
            {loading && <div className="loader"></div>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}

export default LoginForm;
