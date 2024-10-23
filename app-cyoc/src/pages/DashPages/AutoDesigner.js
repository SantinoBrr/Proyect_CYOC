import React, { useState } from 'react';
import { HuePicker } from 'react-color';
import { useNavigate } from 'react-router-dom'; // Para la navegación
import '../../assets/styles/AutoDesigner.css';

// Importa las imágenes de las ruedas
import rueda1 from '../../assets/images/ruedas_modelos/rueda1.jpg';
import rueda2 from '../../assets/images/ruedas_modelos/rueda2.jpg';
import rueda3 from '../../assets/images/ruedas_modelos/rueda3.jpg';
import rueda4 from '../../assets/images/ruedas_modelos/rueda4.jpg';
import rueda5 from '../../assets/images/ruedas_modelos/rueda5.jpg';
import rueda6 from '../../assets/images/ruedas_modelos/rueda6.jpg';
import rueda7 from '../../assets/images/ruedas_modelos/rueda7.jpg';
import rueda8 from '../../assets/images/ruedas_modelos/rueda8.jpg';

// Importa las imágenes de los chasis
import dodge from '../../assets/images/chasis_modelos/dodge.jpg';

// Array de motores con nombre y sonido
const motores = [
  { nombre: '5.2 FSI V10', sonido: '/sounds/audi.mp3' },
  { nombre: 'M TwinPower Turbo V8', sonido: '/sounds/bmw.mp3' },
  { nombre: 'HEMI 5.7 SUPERCARGADO', sonido: '/sounds/dodge.mp3' },
  { nombre: 'Ferrari F120A', sonido: '/sounds/ferrari.mp3' },
  { nombre: 'Wankel 13B', sonido: '/sounds/mazda.mp3' },
  { nombre: 'M178 V8 Biturbo 4.0', sonido: '/sounds/mercedes.mp3' },
  { nombre: 'Coyote 5.0L Ti-VCT V8', sonido: '/sounds/mustang.mp3' },
  { nombre: 'RB26DETT 2.6 Turbo', sonido: '/sounds/nissan.mp3' },
];

function AutoDesigner() {
  const [selectedPart, setSelectedPart] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedWheel, setSelectedWheel] = useState(null); // Estado para rueda seleccionada
  const [selectedChassis, setSelectedChassis] = useState(null); // Estado para chasis seleccionado
  const [selectedEngine, setSelectedEngine] = useState(null); // Estado para motor seleccionado
  const navigate = useNavigate(); // Hook para navegación

  // Lista de imágenes de las ruedas
  const wheelImages = [rueda1, rueda2, rueda3, rueda4, rueda5, rueda6, rueda7, rueda8];

  // Lista de imágenes de chasis
  const chassisImages = [dodge, dodge, dodge, dodge, dodge, dodge, dodge, dodge];

  // Función para seleccionar una parte del auto
  const handlePartSelect = (part) => {
    setSelectedPart(part);
  };

  // Función para cambiar el color desde la paleta
  const handleColorChange = (color) => {
    setColor(color.hex); // Actualiza el color con el círculo de la paleta
  };

  // Función para cambiar el color desde el input
  const handleInputChange = (e) => {
    setColor(e.target.value); // Actualiza el color con el input manual
  };

  // Función para seleccionar una rueda
  const handleWheelSelect = (index) => {
    setSelectedWheel(index); // Actualiza la rueda seleccionada
  };

  // Función para seleccionar un chasis
  const handleChassisSelect = (index) => {
    setSelectedChassis(index); // Actualiza el chasis seleccionado
  };

  // Función para seleccionar un motor
  const handleEngineSelect = (index) => {
    setSelectedEngine(index); // Actualiza el motor seleccionado
  };

  // Función para verificar si todas las partes están seleccionadas
  const allPartsSelected = selectedChassis !== null && selectedWheel !== null && selectedEngine !== null && color !== '';

  // Función para manejar la navegación
  const handleContinue = () => {
    if (allPartsSelected) {
      // Navegar a otra página y pasar los datos seleccionados como estado
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
        {/* CHASIS */}
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

        {/* WHEELS */}
        <div className="option" id="llanta" onMouseEnter={() => handlePartSelect('wheels')}>
          <div className="label">WHEEL</div>
          <div className="grid-container">
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

        {/* MOTOR */}
        <div className="option" id="motor" onMouseEnter={() => handlePartSelect('engine')}>
          <div className="label">ENGINE</div>
          <div className="grid-container">
            {motores.map((motor, index) => (
              <button
                key={index}
                className={`grid-box ${selectedEngine === index ? 'selected' : ''}`}
                onClick={() => handleEngineSelect(index)}
              >
                {motor.nombre} {/* Mostrar el nombre completo del motor */}
              </button>
            ))}
          </div>
        </div>

        {/* COLOR */}
        <div 
          className="option" 
          id="color" 
          onMouseEnter={() => setShowColorPicker(true)} 
          onMouseLeave={() => setShowColorPicker(false)} // Ocultar al sacar el mouse
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
                style={{ backgroundColor: color }} // Cambia el fondo al color seleccionado
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

      {/* Mostrar el botón CONTINUE cuando todas las partes estén seleccionadas */}
      {allPartsSelected && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleContinue} className="continue-button">CONTINUE</button>-
        </div>
      )}
    </div>
  );
}

export default AutoDesigner;
