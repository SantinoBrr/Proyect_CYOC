import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MisModelos({ userID }) {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    const fetchModelos = async () => {
      const response = await axios.get(`/api/MyModels?userID=${userID}`);
      setModelos(response.data);
    };
    fetchModelos();
  }, [userID]);

  return (
    <div>
      <h2>Mis Modelos</h2>
      <ul>
        {modelos.map((modelo) => (
          <li key={modelo.id}>{modelo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MisModelos;
