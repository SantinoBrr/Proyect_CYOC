import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assets/styles/PreView.css';

import audiRueda1 from '../../assets/images/final_models/audi_rueda1.png';
import audiRueda2 from '../../assets/images/final_models/audi_rueda2.png';
import audiRueda3 from '../../assets/images/final_models/audi_rueda3.png';
import audiRueda4 from '../../assets/images/final_models/audi_rueda4.png';

import bmwRueda1 from '../../assets/images/final_models/bmw_rueda1.png';
import bmwRueda2 from '../../assets/images/final_models/bmw_rueda2.png';
import bmwRueda3 from '../../assets/images/final_models/bmw_rueda3.png';
import bmwRueda4 from '../../assets/images/final_models/bmw_rueda4.png';

import dodgeRueda1 from '../../assets/images/final_models/dodge_rueda1.png';
import dodgeRueda2 from '../../assets/images/final_models/dodge_rueda2.png';
import dodgeRueda3 from '../../assets/images/final_models/dodge_rueda3.png';
import dodgeRueda4 from '../../assets/images/final_models/dodge_rueda4.png';

import ferrariRueda1 from '../../assets/images/final_models/ferrari_rueda1.png';
import ferrariRueda2 from '../../assets/images/final_models/ferrari_rueda2.png';
import ferrariRueda3 from '../../assets/images/final_models/ferrari_rueda3.png';
import ferrariRueda4 from '../../assets/images/final_models/ferrari_rueda4.png';

import mazdaRueda1 from '../../assets/images/final_models/mazda_rueda1.png';
import mazdaRueda2 from '../../assets/images/final_models/mazda_rueda2.png';
import mazdaRueda3 from '../../assets/images/final_models/mazda_rueda3.png';
import mazdaRueda4 from '../../assets/images/final_models/mazda_rueda4.png';

import mercedesRueda1 from '../../assets/images/final_models/mercedes_rueda1.png';
import mercedesRueda2 from '../../assets/images/final_models/mercedes_rueda2.png';
import mercedesRueda3 from '../../assets/images/final_models/mercedes_rueda3.png';
import mercedesRueda4 from '../../assets/images/final_models/mercedes_rueda4.png';

import mustangRueda1 from '../../assets/images/final_models/mustang_rueda1.png';
import mustangRueda2 from '../../assets/images/final_models/mustang_rueda2.png';
import mustangRueda3 from '../../assets/images/final_models/mustang_rueda3.png';
import mustangRueda4 from '../../assets/images/final_models/mustang_rueda4.png';

import r34Rueda1 from '../../assets/images/final_models/r34_rueda1.png';
import r34Rueda2 from '../../assets/images/final_models/r34_rueda2.png';
import r34Rueda3 from '../../assets/images/final_models/r34_rueda3.png';
import r34Rueda4 from '../../assets/images/final_models/r34_rueda4.png';

const carImages = {
    audi: [audiRueda1, audiRueda2, audiRueda3, audiRueda4],
    bmw: [bmwRueda1, bmwRueda2, bmwRueda3, bmwRueda4],
    dodge: [dodgeRueda1, dodgeRueda2, dodgeRueda3, dodgeRueda4],
    ferrari: [ferrariRueda1, ferrariRueda2, ferrariRueda3, ferrariRueda4],
    mazda: [mazdaRueda1, mazdaRueda2, mazdaRueda3, mazdaRueda4],
    mercedes: [mercedesRueda1, mercedesRueda2, mercedesRueda3, mercedesRueda4],
    mustang: [mustangRueda1, mustangRueda2, mustangRueda3, mustangRueda4],
    r34: [r34Rueda1, r34Rueda2, r34Rueda3, r34Rueda4],
};

function PreView() {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedChassis, selectedWheel, selectedEngine, selectedColor, vehicleName, description } = location.state || {};

    console.log("Chasis seleccionado:", selectedChassis);
    console.log("Rueda seleccionada:", selectedWheel);

    const carImage = carImages[selectedChassis] && selectedWheel >= 0 && selectedWheel < carImages[selectedChassis].length 
        ? carImages[selectedChassis][selectedWheel] 
        : null;

    const handleFinish = () => {
        // Redirigir a la página de inicio al hacer clic en el botón
        navigate('/');  
    };

    return (
        <div className="preview-container" style={{ backgroundColor: 'gray' }}>
            <h1 className="preview-title">Vista Previa del Vehículo</h1>
            <div className="vehicle-details">
                <h2>{vehicleName}</h2>
                <p>{description}</p>
                <p>Chasis seleccionado: {selectedChassis}</p>
                <p>Rueda seleccionada: {selectedWheel + 1}</p>
                <p>Motor seleccionado: {selectedEngine?.nombre}</p> 
                <p>Color seleccionado: {selectedColor} </p>
                <div className="audio-player">
                    <audio controls>
                        <source src={selectedEngine?.sonido} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div> 
            </div>
            <div className="car-image-container" style={{ backgroundColor: selectedColor, overflow: 'hidden'}}>
                <img src={carImage} alt="PreView" className="car-image" />
            </div>
            <button className="finish-button" onClick={handleFinish}>Finish</button>
        </div>
    );
}

export default PreView;
