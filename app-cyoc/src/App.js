import React from 'react';
import { useNavigate } from 'react-router-dom';
import miImagen from './assets/images/Imagen_Rueda.png';
import './App.css';
import './assets/styles/styles.css';
import Navbar from './Components/NavBar/NavBar';
import Routing from './Routing/Routing';


function App() {


  return (
    <div>
      <Navbar/>
      <Routing/>
    </div>
  );
}

export default App;