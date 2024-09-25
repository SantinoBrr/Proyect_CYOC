import React, { useState } from 'react';

function AutoDesigner() {
  const [selectedPart, setSelectedPart] = useState(null);

  // Función para manejar la selección de partes
  const handlePartSelect = (part) => {
    setSelectedPart(part);
    // Aquí iría la lógica para actualizar el diseño del auto
  };

  return (
    <div className="create-car-page-container">
      <h2>Diseña tu Auto</h2>
      {/* Ejemplo de botón para seleccionar partes */}
      <button onClick={() => handlePartSelect('llantas')}>Seleccionar Llantas</button>
      {/* Mostrar el auto con las partes seleccionadas */}
      <div>{selectedPart && <p>Parte seleccionada: {selectedPart}</p>}</div>
    </div>
  );
}

export default AutoDesigner;
