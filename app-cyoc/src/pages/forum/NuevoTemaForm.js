import React, { useState } from 'react';
import '../../assets/styles/forum.css';

function NuevoTemaForm() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (

    <div className="centered-container">
    <div className="nuevo-tema-form">
      <h2>Crear un Nuevo Tema</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título del tema"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <textarea
          className="textarea"
          placeholder="Contenido del tema"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          required
        />
        <button type="submit">Publicar Tema</button>
      </form>
    </div>
    </div>
  );
}

export default NuevoTemaForm;
