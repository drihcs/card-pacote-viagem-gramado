import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="card">
        <div className="image-container">
          <img src="/gramado.png" className="card-image" alt="Gramado" />
          <div className="badge">9 DIAS / 8 NOITES</div>
        </div>

        <div className="card-body">
          <p className="pacote">PACOTE</p>
          <h2 className="title">Pacotes para Gramado</h2>

          <div className="rating">
            <span className="score">9.4</span>
            <span className="stars">★★★</span>
          </div>

          <p className="departure">Saindo de São Paulo</p>
          <p className="combo">Hotel + Aéreo</p>


          <div className="discount-div">
            <div className="card-divider">
            </div>

            <div className="discount">
              <div className="discount-text">Economize</div>
              <div className="discount-value">R$84</div>
            </div>
          </div>


          <div className="price-info">
            <p className="note-1">Preço por pessoa</p>
            <p className="old-price">R$ 1.266</p>
            <div className="price-info-offer">
              <p className="new-price-symbol">R$ </p>
              <p className="new-price-value">1.182</p>
            </div>
            <p className="note-2">Taxas e impostos não inclusos</p>
          </div>
        </div>
      </div >
    </>

  );
}

export default App;
