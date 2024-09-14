import React from 'react'
import { useNavigate } from 'react-router-dom';
import miImagen from '../../assets/images/Imagen_Rueda.png';
import '../../App.css';
import '../../assets/styles/styles.css';


function HomePage() {
    const navigate = useNavigate();

  const handleCreateCarClick = () => {
    navigate('/create-car');
  };
  return (
    <div className="App"> 
      <header className="App-header">
        <h1>Welcome to CYOC</h1>
        <h5>Create your own car here!</h5>
        <img src={miImagen} className="App-logo" alt="Imagen de Rueda" />
        <div className='boton-create-car'>
          <button onClick={handleCreateCarClick}>Create Car</button>
        </div>
      </header>
    </div>
  )
}

export default HomePage