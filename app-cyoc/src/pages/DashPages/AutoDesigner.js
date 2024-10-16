import React, { useState } from 'react';
import '../../assets/styles/AutoDesigner.css';

function AutoDesigner() {
  const [selectedPart, setSelectedPart] = useState(null);
  
  const handlePartSelect = (part) => {
    setSelectedPart(part);
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
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="grid-box">Box {index + 1}</div>
            ))}
          </div>
        </div>
        <div className="option" id="llanta" onMouseEnter={() => handlePartSelect('wheels')}>
          <div className="label">WHEEL</div>
          <div className="grid-container">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="grid-box">Box {index + 1}</div>
            ))}
          </div>
        </div>
        <div className="option" id="motor" onMouseEnter={() => handlePartSelect('engine')}>
          <div className="label">ENGINE</div>
          <div className="grid-container">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="grid-box">Box {index + 1}</div>
            ))}
          </div>
        </div>
        <div className="option" id="color" onMouseEnter={() => handlePartSelect('color')}>
          <div className="label">COLOR</div>
          <div className="grid-container">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="grid-box">Box {index + 1}</div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {selectedPart && <p className='p-selectpart'>Selected part: {selectedPart}</p>}
      </div>
    </div>
  );
}

export default AutoDesigner;
