import React, { useState } from 'react';
import '../../assets/styles/forum.css';

function RespuestaForm({ temaId, setRespuestas }) {
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/temas/${temaId}/respuestas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contenido }),
    })
      .then((response) => response.json())
      .then((newRespuesta) => {
        setRespuestas((prevRespuestas) => [...prevRespuestas, newRespuesta]);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        placeholder="Escribe una respuesta"
      />
      <button type="submit">Responder</button>
    </form>
  );
}

export default RespuestaForm;
