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
        <div className="option" id="chasis" onClick={() => handlePartSelect('chasis')}>
          <div className="label">CHASSIS</div>
          <button className="choose">CHOOSE</button>
          <div className="description">The car chassis is the base structure supporting all mechanical components and the bodywork.</div>
        </div>
        <div className="option" id="llanta" onClick={() => handlePartSelect('wheels')}>
          <div className="label">WHEEL</div>
          <button className="choose">CHOOSE</button>
          <div className="description">The wheels are essential for vehicle movement and support the entire weight.</div>
        </div>
        <div className="option" id="motor" onClick={() => handlePartSelect('engine')}>
          <div className="label">ENGINE</div>
          <button className="choose">CHOOSE</button>
          <div className="description">The engine is the heart of the vehicle, converting fuel into motion.</div>
        </div>
        <div className="option" id="color" onClick={() => handlePartSelect('color')}>
          <div className="label">COLOR</div>
          <button className="choose">CHOOSE</button>
          <div className="description">Color is the aesthetic choice for your car's exterior.</div>
        </div>
      </div>
      <div>
      {selectedPart && <p className='p-selectpart'>Selected part: {selectedPart}</p>}

      </div>
    </div>
  );
}

export default AutoDesigner;
