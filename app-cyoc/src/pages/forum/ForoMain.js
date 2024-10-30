import React from 'react';
import '../../assets/styles/forum.css';
import { useNavigate } from 'react-router-dom';

function Forum() {
  const navigate = useNavigate();

  const handleNewThemeClick = () => {
    navigate('/new-theme');
  };

  return (
    <div className="forum-container">
      <header className="forum-header">
        <h1>Bienvenido al Foro</h1>
        <p>Comparte ideas, discute temas interesantes y aprende junto a la comunidad.</p>
      </header>
      <main className="forum-content">
        <button className="nuevo-tema-button" onClick={handleNewThemeClick}>
          + Crear Nuevo Tema
        </button>
      </main>
    </div>
  );
}

export default Forum;
