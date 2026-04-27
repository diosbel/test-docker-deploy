import React from 'react';
import FormularioContacto from './FormularioContacto';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#1890ff', marginBottom: '30px' }}>
        Sistema de Contacto - Instituto de Geografía Tropical
      </h1>
      <FormularioContacto />
    </div>
  );
}

export default App;
