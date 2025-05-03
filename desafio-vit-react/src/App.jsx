import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="card">
        <img src="/gramado.png" className="card-image" alt="Gramado" />

        <div className="card-body">
          <div className="badge">9 DIAS / 8 NOITES</div>

          <h2 className="title">Pacotes para Gramado</h2>

          <div className="rating">
            <span className="score">9.4</span>
            <span className="stars">★★★☆☆</span>
          </div>

          <p className="departure">Saindo de São Paulo</p>
          <p className="combo">Hotel + Aéreo</p>

          <div className="discount">Economize R$84</div>

          <div className="price-info">
            <p className="old-price">R$ 1.266</p>
            <p className="new-price">R$ 1.182</p>
            <p className="note">Taxas e impostos não inclusos</p>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
