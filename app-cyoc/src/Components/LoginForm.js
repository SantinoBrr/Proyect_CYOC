import React, { useState } from 'react';
import { authService } from '../services/authService';
import '../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  // Estado para la contraseña
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navegate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        authService.login(email, password)
            .then(response => {
                setLoading(false);
                if (response.success) {
                    navegate('/dash');
                } else {
                    setErrorMessage(response.message);
                }
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(error.message);
            });
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
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? 'Cargando...' : 'Ingresar'}
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}

export default LoginForm;
