import miImagen from './assets/images/Imagen_Rueda.png';
import AutoDesigner from './Components/AutoDesigner';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={miImagen} className="App-logo" alt="Imagen de Rueda" />
     
        <AutoDesigner/>
      </header>
    </div>
  );
}

export default App;
