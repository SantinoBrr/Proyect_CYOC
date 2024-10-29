import React, { useState } from 'react';
import { HuePicker } from 'react-color';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/AutoDesigner.css';


import rueda1 from '../../assets/images/ruedas_modelos/rueda1.png';
import rueda2 from '../../assets/images/ruedas_modelos/rueda2.png';
import rueda3 from '../../assets/images/ruedas_modelos/rueda3.png';
import rueda4 from '../../assets/images/ruedas_modelos/rueda4.png';


import dodge from '../../assets/images/chasis_modelos/dodge.jpg';
import audi from '../../assets/images/chasis_modelos/audi.jpg';
import mercedes from '../../assets/images/chasis_modelos/mercedes.jpg';
import mazda from '../../assets/images/chasis_modelos/mazda.jpg';
import bmw from '../../assets/images/chasis_modelos/bmw.jpg';
import mustang from '../../assets/images/chasis_modelos/mustang.jpg';
import r34 from '../../assets/images/chasis_modelos/r34.jpg';
import ferrari from '../../assets/images/chasis_modelos/ferrari.jpg';




const motores = [
  { nombre: '5.2 FSI V10', sonido: '../../assets/audio/motores_sonidos/audi.mp3' },
  { nombre: 'M TwinPower Turbo V8', sonido: '../../assets/audio/motores_sonidos/bmw.mp3' },
  { nombre: 'HEMI 5.7 SUPERCARGADO', sonido: '../../assets/audio/motores_sonidos/dodge.mp3' },
  { nombre: 'Ferrari F120A', sonido: '../../assets/audio/motores_sonidos/ferrari.mp3' },
  { nombre: 'Wankel 13B', sonido: '../../assets/audio/motores_sonidos/mazda.mp3' },
  { nombre: 'M178 V8 Biturbo 4.0', sonido: '../../assets/audio/motores_sonidos/mercedes.mp3' },
  { nombre: 'Coyote 5.0L Ti-VCT V8', sonido: '../../assets/audio/motores_sonidos/mustang.mp3' },
  { nombre: 'RB26DETT 2.6 Turbo', sonido: '../../assets/audio/motores_sonidos/nissan.mp3' },
];

function AutoDesigner() {
  const [selectedPart, setSelectedPart] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedWheel, setSelectedWheel] = useState(null); 
  const [selectedChassis, setSelectedChassis] = useState(null); 
  const [selectedEngine, setSelectedEngine] = useState(null);
  const navigate = useNavigate(); 


  const wheelImages = [rueda1, rueda2, rueda3, rueda4];


  const chassisImages = [dodge, audi, mercedes, mazda, bmw, mustang, r34, ferrari];


  const handlePartSelect = (part) => {
    setSelectedPart(part);
  };

  const handleColorChange = (color) => {
    setColor(color.hex);
  };

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };


  const handleWheelSelect = (index) => {
    setSelectedWheel(index);
  };

  
  const handleChassisSelect = (index) => {
    setSelectedChassis(index); 
  };

  
  const handleEngineSelect = (index) => {
    setSelectedEngine(index); 
  };

 
  const allPartsSelected = selectedChassis !== null && selectedWheel !== null && selectedEngine !== null && color !== '';

 
  const handleContinue = () => {
    if (allPartsSelected) {
    
      navigate('/create-car/final-page', {
        state: {
          selectedChassis,
          selectedWheel,
          selectedEngine,
          selectedColor: color
        }
      });
    }
  };

  return (
    <div>
      <header className="header">
        SELECT CAR PARTS
      </header>
      <div className="container">

        <div className="option" id="chasis" onMouseEnter={() => handlePartSelect('chasis')}>
          <div className="label">CHASSIS</div>
          <div className="grid-container">
            {chassisImages.map((image, index) => (
              <button
                key={index}
                className={`grid-box ${selectedChassis === index ? 'selected' : ''}`}
                onClick={() => handleChassisSelect(index)}
              >
                <img src={image} alt={`Chassis ${index + 1}`} className="chassis-image" />
              </button>
            ))}
          </div>
        </div>


        <div className="option" id="llanta" onMouseEnter={() => handlePartSelect('wheels')}>
          <div className="label">WHEEL</div>
            <div className="wheel-grid-container">
            {wheelImages.map((image, index) => (
            <button
            key={index}
            className={`grid-box wheel-box ${selectedWheel === index ? 'selected' : ''}`}
            onClick={() => handleWheelSelect(index)}
            >
          <img src={image} alt={`Wheel ${index + 1}`} className="wheel-image" />
        </button>
        ))}
        </div>
        </div>


        <div className="option" id="motor" onMouseEnter={() => handlePartSelect('engine')}>
          <div className="label">ENGINE</div>
          <div className="grid-container">
            {motores.map((motor, index) => (
              <button
                key={index}
                className={`grid-box ${selectedEngine === index ? 'selected' : ''}`}
                onClick={() => handleEngineSelect(index)}
              >
                {motor.nombre}
              </button>
            ))}
          </div>
        </div>
        <div 
          className="option" 
          id="color" 
          onMouseEnter={() => setShowColorPicker(true)} 
          onMouseLeave={() => setShowColorPicker(false)}
        >
          <div className="label">COLOR</div>
          {showColorPicker && (
            <div className="color-picker">
              <HuePicker color={color} onChange={handleColorChange} />
              <input
                type="text"
                value={color}
                onChange={handleInputChange}
                placeholder="#000000"
                className="color-input"
                style={{ backgroundColor: color }}
              />
            </div>
          )}
        </div>
      </div>

      <div>
        {selectedPart && <p className='p-selectpart'>Selected part: {selectedPart}</p>}
        {selectedPart === 'color' && <p style={{ color }}>Selected color: {color}</p>}
        {selectedPart === 'engine' && selectedEngine !== null && (
          <p>Selected engine: {motores[selectedEngine].nombre}</p>
        )}
      </div>

      {allPartsSelected && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleContinue} className="continue-button">CONTINUE</button>-
        </div>
      )}
    </div>
  );
}

export default AutoDesigner;
