import React from 'react';
import miImagen from './assets/images/Imagen_Rueda.png';
import AutoDesigner from './Components/AutoDesigner';
import './App.css';
import Routing from './pages/Routing/Router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={miImagen} className="App-logo" alt="Imagen de Rueda" />
        <Routing />
        <AutoDesigner />
      </header>
    </div>
  );
}

export default App;