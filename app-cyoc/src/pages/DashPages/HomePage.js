import React from 'react'
import { useNavigate } from 'react-router-dom';
import { authService } from '../../Components/services/authService';
import miImagen from '../../assets/videos/Gif-auto-home.gif';
import '../../App.css';
import '../../assets/styles/styles.css';


function HomePage() {
  const navigate = useNavigate();

  const handleCreateCarClick = () => {
      if (authService.isAuthenticated()) {
          navigate('/create-car');
      } else {
          navigate('/login');
      }
  };

  return (
      <div className="App"> 
          <header className="App-header">
              <h1 className='title_homepage'>Welcome to CYOC</h1>
              <h5 className='h5_homepage'>Create your own car here!</h5>
              <img src={miImagen} className="App-logo" alt="Imagen de Rueda" />
              <div className='boton-create-car'>
                  <button onClick={handleCreateCarClick}>Create Car</button>
              </div>
          </header>
      </div>
  );
}

export default HomePage;