import React from 'react'
import LoginForm from '../Components/LoginForm'


function LoginPage() {

    const handleLogin = (email, password) => {
        console.log(email, password)

    }

    return (
        <div className='login-page-container'>
        <div className='login-page'>
            <h2>Login Here</h2>
            <LoginForm onSubmit={handleLogin} />
        </div>
        </div>
    )
}

export default LoginPage