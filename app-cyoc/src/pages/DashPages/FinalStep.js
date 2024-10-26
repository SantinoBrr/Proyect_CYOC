import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../assets/styles/finalstep.css';

function FinalStep() {
  const location = useLocation();
  const selectedParts = location.state || {};

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
        className="description-textarea"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          handleInputChange();
        }}
        />
      </div>


      <div className="final-grid-container">
        <div className="final-grid-item">
          Selected Engine: {selectedParts.selectedEngine?.nombre || 'No engine selected'}
        </div>
        <div className="final-grid-item">
          Selected Wheel: {selectedParts.selectedWheel + 1 || 'No wheel selected'}
        </div>
        <div className="final-grid-item">
          Selected Chassis: Chassis {selectedParts.selectedChassis + 1 || 'No chassis selected'}
        </div>
        <div className="final-grid-item">
          Selected Color: 
          <span className="color-code">{selectedParts.selectedColor}</span>
          <div
            className="color-square"
            style={{
              backgroundColor: selectedParts.selectedColor,
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
