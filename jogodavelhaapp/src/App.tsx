import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>JOGO DA VELHA</h1>
        <h3>Desafio L2: React e TS</h3>
      </div>
      <div className="main">
        <div className="content">
          <div className="turno">
              <h2>Turno</h2>
              <p>Jogando agora: Jogador</p>
          </div>
          <div className="tabuleiro">
                  <div className="linha um">
                      <div className="coluna um"></div>
                      <div className="coluna dois"></div>
                      <div className="coluna tres"></div>
                  </div>
                  <div className="linha dois">
                      <div className="coluna um"></div>
                      <div className="coluna dois"></div>
                      <div className="coluna tres"></div>
                  </div>
                  <div className="linha tres">
                      <div className="coluna um"></div>
                      <div className="coluna dois"></div>
                      <div className="coluna tres"></div>
                  </div>
              </div>
        </div>
        <div className="sidebar">
          <div className="placar">
                  <h2>PLACAR</h2>
                  <p>Partidas jogadas: 0</p>
                  <p>Partida atual: 0</p>

                  <h3>Vitórias</h3>
                  <p>Jogador: 0</p>
                  <p>Computador: 0</p>

                  <div className="controles">
                      <button>Reiniciar partida</button>
                      <button>Riniciar placar</button>
                  </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export default App;
