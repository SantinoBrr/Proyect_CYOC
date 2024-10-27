import React, { useState } from 'react';
import axios from 'axios';

const GuardarModelo = ({ usuarioId, configuracion }) => {
  const [nombre, setNombre] = useState('');

  const guardarModelo = () => {
    axios.post('/guardar-modelo', {
      usuario_id: usuarioId,
      nombre: nombre,
      chasis: configuracion.chasis,
      ruedas: configuracion.ruedas,
      motor: configuracion.motor,
      color: configuracion.color,
    })
    .then(response => {
      if (response.data.success) {
        alert('Modelo guardado con éxito');
      }
    })
    .catch(error => {
      console.error('Error al guardar el modelo:', error);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre del modelo"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={guardarModelo}>Guardar Modelo</button>
    </div>
  );
};

export default GuardarModelo;
