// src/frontend/components/RegisterPage.js
import React, { useState } from 'react';

const RegisterPage = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, contraseña }),
    });

    const data = await response.text();
    setMensaje(data);
  };

  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default RegisterPage;
