import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MisModelos = ({ usuarioId }) => {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    axios.get(`/modelos/${usuarioId}`)
      .then(response => {
        if (response.data.success) {
          setModelos(response.data.modelos);
        }
      })
      .catch(error => {
        console.error('Error al obtener los modelos:', error);
      });
  }, [usuarioId]);

  return (
    <div>
      <h2>Mis Modelos Guardados</h2>
      <ul>
        {modelos.map(modelo => (
          <li key={modelo.id}>
            <p><strong>Nombre:</strong> {modelo.nombre}</p>
            <p><strong>Chasis:</strong> {modelo.chasis}</p>
            <p><strong>Ruedas:</strong> {modelo.ruedas}</p>
            <p><strong>Motor:</strong> {modelo.motor}</p>
            <p><strong>Color:</strong> {modelo.color}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MisModelos;
