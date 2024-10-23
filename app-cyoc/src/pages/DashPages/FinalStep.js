import React, { useState } from 'react';


function FinalStep({ selectedParts }) {
    const [vehicleName, setVehicleName] = useState('');
    const [description, setDescription] = useState('');
    const [isFormComplete, setIsFormComplete] = useState(false);
  
    const handleInputChange = () => {
      setIsFormComplete(vehicleName.trim() !== '' && description.trim() !== '');
    };
  
    const handleLaunchClick = () => {
      alert('Vehicle launched successfully!');
    };
  
    return (
      <div className="final-stage">
        <h1 className="title">FINAL STAGE</h1>
        <div className="form-group">
          <label htmlFor="vehicle-name">Vehicle Name:</label>
          <input
            type="text"
            id="vehicle-name"
            value={vehicleName}
            onChange={(e) => {
              setVehicleName(e.target.value);
              handleInputChange();
            }}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              handleInputChange();
            }}
          />
        </div>
  
        {/* Verificar si selectedParts está definido antes de acceder a sus propiedades */}
        <div className="grid-container">
          <div className="grid-item">
            Selected Engine: {selectedParts?.selectedEngine || 'No engine selected'}
          </div>
          <div className="grid-item">
            Selected Wheel: {selectedParts?.selectedWheel || 'No wheel selected'}
          </div>
          <div className="grid-item">
            Selected Chassis: {selectedParts?.selectedChassis || 'No chassis selected'}
          </div>
          <div className="grid-item">
            Selected Color: {selectedParts?.selectedColor || 'No color selected'}
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
  
        {/* Reproductor de pista de sonido del motor */}
        {selectedParts?.selectedEngine?.sonido && (
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
  