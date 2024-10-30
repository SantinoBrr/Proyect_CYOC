import React, { useEffect, useState } from 'react';
import RespuestaForm from './RespuestaForm';
import '../../assets/styles/forum.css';

function Tema({ match }) {
  const [tema, setTema] = useState(null);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    const temaId = match.params.id;

    fetch(`/api/temas/${temaId}`)
      .then((response) => response.json())
      .then((data) => {
        setTema(data.tema);
        setRespuestas(data.respuestas);
      });
  }, [match.params.id]);

  return (
    <div>
      {tema && (
        <>
          <h2>{tema.titulo}</h2>
          <p>{tema.contenido}</p>
          <h3>Respuestas</h3>
          <ul>
            {respuestas.map((respuesta) => (
              <li key={respuesta.id}>{respuesta.contenido}</li>
            ))}
          </ul>
          <RespuestaForm temaId={tema.id} setRespuestas={setRespuestas} />
        </>
      )}
    </div>
  );
}

export default Tema;
