import React, { useState } from 'react';
import '../../assets/styles/AutoDesigner.css'; // El archivo CSS que contiene los estilos que tenías

function AutoDesigner() {
  const [selectedPart, setSelectedPart] = useState(null);

  // Función para manejar la selección de partes
  const handlePartSelect = (part) => {
    setSelectedPart(part);
    // Aquí iría la lógica para actualizar el diseño del auto
  };

  return (
    <div>
      <header className="header">
        SELECCIÓN DE PARTES
      </header>
      <div className="container">
        <div className="option" id="chasis" onClick={() => handlePartSelect('chasis')}>
          <div className="label">CHASIS</div>
          <button className="choose">ELEGIR</button>
          <div className="description">El chasis de un auto es la estructura base que soporta todos los componentes mecánicos y la carrocería.</div>
        </div>
        <div className="option" id="llanta" onClick={() => handlePartSelect('llantas')}>
          <div className="label">LLANTA</div>
          <button className="choose">ELEGIR</button>
          <div className="description">Las ruedas son esenciales para el movimiento del vehículo y soportan todo el peso.</div>
        </div>
        <div className="option" id="motor" onClick={() => handlePartSelect('motor')}>
          <div className="label">MOTOR</div>
          <button className="choose">ELEGIR</button>
          <div className="description">El motor es el corazón del vehículo, convierte el combustible en movimiento.</div>
        </div>
        <div className="option" id="color" onClick={() => handlePartSelect('color')}>
          <div className="label">COLOR</div>
          <button className="choose">ELEGIR</button>
          <div className="description">El color es la elección estética del exterior de tu auto.</div>
        </div>
      </div>
      {/* Mostrar la parte seleccionada */}
      <div>
        {selectedPart && <p>Parte seleccionada: {selectedPart}</p>}
      </div>
    </div>
  );
}

export default AutoDesigner;
