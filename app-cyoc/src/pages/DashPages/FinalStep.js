import React, { useState } from 'react';
import '../../assets/styles/finalstep.css';

function FinalStep({ selectedParts, userName }) {
  const [vehicleName, setVehicleName] = useState('');
  const [description, setDescription] = useState('');
  const [isFormComplete, setIsFormComplete] = useState(false);

  // Comprueba si se completaron todos los campos
  const handleInputChange = () => {
    if (vehicleName && description) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  };

  const handleLaunchClick = () => {
    if (isFormComplete) {
      // Aquí se podría enviar la información a la base de datos cuando esté lista
      console.log('Vehículo lanzado:', {
        nombre: vehicleName,
        descripcion: description,
        partesSeleccionadas: selectedParts,
        usuario: userName
      });
    }
  };

  return (
    <div className="final-stage">
      <h1 className="title">FINAL STAGE</h1>
      
      {/* Campo para el nombre del vehículo */}
      <div className="vehicle-name-container">
        <input 
          type="text" 
          className="vehicle-name" 
          placeholder="Enter vehicle name" 
          value={vehicleName} 
          onChange={(e) => { setVehicleName(e.target.value); handleInputChange(); }}
        />
        <p className="by-user">By {userName}</p>
      </div>

      {/* Pista de audio del motor seleccionado */}
      <div className="audio-container">
        <audio controls>
          <source src={selectedParts.motorSound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Cuadro de descripción */}
      <div className="description-container">
        <textarea
          className="description"
          placeholder="Enter vehicle description"
          value={description}
          onChange={(e) => { setDescription(e.target.value); handleInputChange(); }}
        />
      </div>

      {/* Grid para mostrar las 4 partes seleccionadas */}
      <div className="parts-grid">
        {selectedParts.parts.map((part, index) => (
          <div key={index} className="part-box">
            <img src={part.image} alt={`Part ${index + 1}`} className="part-image" />
          </div>
        ))}
      </div>

      {/* Botón Launch */}
      <button 
        className={`launch-button ${isFormComplete ? 'active' : 'disabled'}`} 
        onClick={handleLaunchClick}
        disabled={!isFormComplete}
      >
        {isFormComplete ? 'LAUNCH' : 'CONTINUE'}
      </button>
    </div>
  );
}

export default FinalStep;
