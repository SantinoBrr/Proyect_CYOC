import React, { useState } from 'react';
import { authService } from './services/authService'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        // Llama al servicio de autenticación para registrar el usuario
        const response = await authService.registerUser(email, name, password);

        setLoading(false);
        if (response.success) {
            // Redirige a la página de inicio de sesión si el registro fue exitoso
            navigate('/login');
        } else {
            // Muestra el mensaje de error en caso de fallo en el registro
            setErrorMessage(response.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
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
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Register'}
                </button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </form>
    );
}

export default RegisterForm;
