import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MisModelos({ userID }) {
  const [modelos, setModelos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModelos = async () => {
      try {
        const response = await axios.get(`/api/MyModels?userID=${userID}`);
        setModelos(response.data);
      } catch (error) {
        console.error("Error al obtener los modelos:", error);
        setError("No se pudieron cargar los modelos. Por favor, intenta de nuevo.");
      }
    };

    if (userID) {
      fetchModelos();
    }
  }, [userID]);

  return (
    <div>
      <h2>Mis Modelos</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {modelos.map((modelo) => (
          <li key={modelo.id}>{modelo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MisModelos;
