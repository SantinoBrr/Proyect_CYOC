import React from 'react'
import LoginForm from '../../Components/LoginForm'
import { authService } from '../../Components/services/authService'

function LoginPage() {

    const handleLogin = (email, password) => {
        console.log(email, password)

    }

    return (
        <div className='login-page'>
            <h2>Iniciar sesion</h2>
            <LoginForm onSubmit={handleLogin} />
        </div>
    )
}

export default LoginPage