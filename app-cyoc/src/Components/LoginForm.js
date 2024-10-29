import React, { useState } from 'react';
import { useUser } from '../Context/UserContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';
import '../assets/styles/styles.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useUser(); // Obtener la función de login del contexto

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await login({ email, password }); // Llama al login desde el contexto
            setLoading(false);
            if (response.success) {
                navigate('/create-car'); 
            } else {
                setErrorMessage(response.message); // Muestra el mensaje de error
            }
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.message); // Maneja errores inesperados
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
                <div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
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
                {loading ? 'Loading...' : 'Login'}
            </button>
            {loading && <div className="loader"></div>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}

export default LoginForm;
