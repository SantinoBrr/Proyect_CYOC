import React from 'react';
import GuardarModelo from './GuardarModelo';
import MisModelos from './MisModelos';

const PaginaPrincipal = ({ usuarioId, configuracion }) => {
  return (
    <div>
      <h1>Selecciona y Guarda Tu Modelo de Auto</h1>
      <GuardarModelo usuarioId={usuarioId} configuracion={configuracion} />
      <MisModelos usuarioId={usuarioId} />
    </div>
  );
};

export default PaginaPrincipal;
