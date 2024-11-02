import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../../Context/UserContext';
import '../../assets/styles/FinalStep.css';

function FinalStep() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedParts = location.state || {};
  const { user } = useUser();

  const [vehicleName, setVehicleName] = useState('');
  const [description, setDescription] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsFormComplete(vehicleName.trim() !== '' && description.trim() !== '');
  }, [vehicleName, description]);

  const handleLaunchClick = async () => {
    if (!user) {
        alert('Debes iniciar sesión para guardar el modelo.');
        return;
    }

    const modelData = {
        name: vehicleName,
        description,
        chassis: selectedParts.selectedChassis || null,
        wheels: (selectedParts.selectedWheel !== undefined ? Number(selectedParts.selectedWheel) + 1 : null),
        engine: selectedParts.selectedEngine?.nombre || null,
        color: selectedParts.selectedColor || null,
    };

    console.log('Datos del modelo a enviar:', modelData);
    console.log('Partes Seleccionadas:', selectedParts);

    // Verificar si hay datos faltantes
    const missingFields = Object.entries(modelData).filter(([key, value]) => value === null);
    if (missingFields.length > 0) {
        alert(`Faltan datos requeridos: ${missingFields.map(([key]) => key).join(', ')}`);
        return;
    }

    // Verificar si 'wheels' es un número válido
    if (isNaN(modelData.wheels) || modelData.wheels <= 0) {
        alert('El número de ruedas debe ser un número válido mayor que 0.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3001/api/models', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modelData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Datos de error recibidos del servidor:", errorData);
            alert(`Error: ${errorData.message || response.statusText}`);
            return;
        }

        alert('Modelo guardado con éxito.');

        navigate('/create-car/PreView', {
          state: {
              selectedChassis: selectedParts.selectedChassis,
              selectedWheel: selectedParts.selectedWheel,
              selectedEngine: selectedParts.selectedEngine,
              selectedColor: selectedParts.selectedColor,
              vehicleName: vehicleName,
              description: description,
          }
      });
  } catch (error) {
      console.error('Error al guardar el modelo:', error);
      alert('Error al guardar el modelo.');
  }
};

  return (
    <div className="final-stage">
      <h1 className="title">FINAL STAGE</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-group">
        <label htmlFor="vehicle-name">Vehicle Name:</label>
        <input
          type="text"
          id="vehicle-name"
          value={vehicleName}
          onChange={(e) => setVehicleName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          className="description-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="final-grid-container">
        <div className="final-grid-item">
          Selected Engine: {selectedParts.selectedEngine?.nombre || 'No engine selected'}
        </div>
        <div className="final-grid-item">
          Selected Wheel: {selectedParts.selectedWheel !== undefined ? selectedParts.selectedWheel + 1 : 'No wheel selected'}
        </div>
        <div className="final-grid-item">
          Selected Chassis: {selectedParts.selectedChassis || 'No chassis selected'}
        </div>
        <div className="final-grid-item">
          Selected Color: 
          <span className="color-code">{selectedParts.selectedColor || 'No color selected'}</span>
          <div
            className="color-square"
            style={{
              backgroundColor: selectedParts.selectedColor || '#fff',
              width: '20px',
              height: '20px',
              display: 'inline-block',
              marginLeft: '10px',
              border: '1px solid #ccc',
            }}
          ></div>
        </div>
      </div>

      <div className="form-group">
        <button
          className="launch-button"
          disabled={!isFormComplete}
          onClick={handleLaunchClick}
        >
          LAUNCH
        </button>
      </div>

      {selectedParts.selectedEngine?.sonido && (
        <div className="audio-player">
          <audio controls>
            <source src={selectedParts.selectedEngine.sonido} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default FinalStep;
