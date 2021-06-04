import { stringify } from 'querystring';
import React, { useState } from 'react';
import './App.css';

function App() {

  const getInitialState = () =>{
    const state = []
    for(let casas = 1; casas < 10; casas ++){
      state[casas] = 0;
    }
    return state;
  }

  const [player, setPlayer] = useState(1);
  const [value, setValue] = useState(getInitialState);

  const handleClick = (key: string) => {
    setValue({
      ...value,
      [key]: player
    });
    setPlayer(player * -1)
  }

  const marcaJogador = (player: number) => {
    let marca = '';
    if(player === 1){
      marca = 'L';
    }
    if(player === -1){
      marca = '2';
    }
    if(player === 0){
      marca = '';
    }
    return marca;
  };
  
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
              <p>Jogando agora: {player === 1 ? 'Humano' : 'Bot'}</p>
          </div>
          <div className="tabuleiro">
              <div className="linha">
                  <div className="coluna">
                    <button id="1" type="button" onClick={() => handleClick('1')} value={marcaJogador(value[1])}>
                      {marcaJogador(value[1])}
                    </button>
                  </div>
                  <div className="coluna">
                    <button id="2" type="button" onClick={() => handleClick('2')} value={marcaJogador(value[2])}>
                      {marcaJogador(value[2])}
                    </button>
                  </div>
                  <div className="coluna">
                    <button id="3" type="button" onClick={() => handleClick('3')} value={marcaJogador(value[3])}>
                      {marcaJogador(value[3])}
                    </button>
                  </div>
              </div>
              <div className="linha">
                  <div className="coluna">
                    <button id="4" type="button" onClick={() => handleClick('4')} value={marcaJogador(value[4])}>
                      {marcaJogador(value[4])}
                    </button>
                  </div>
                  <div className="coluna">
                    <button id="5" type="button" onClick={() => handleClick('5')} value={marcaJogador(value[5])}>
                      {marcaJogador(value[5])}
                    </button>
                  </div>
                  <div className="coluna">
                    <button id="6" type="button" onClick={() => handleClick('6')} value={marcaJogador(value[6])}>
                      {marcaJogador(value[6])}
                    </button>
                  </div>
              </div>
              <div className="linha">
                  <div className="coluna">
                    <button id="7" type="button" onClick={() => handleClick('7')} value={marcaJogador(value[7])}>
                      {marcaJogador(value[7])}
                    </button>
                  </div>
                  <div className="coluna">
                    <button id="8" type="button" onClick={() => handleClick('8')} value={marcaJogador(value[8])}>
                      {marcaJogador(value[8])}
                    </button>
                  </div>
                  <div className="coluna">
                    <button id="9" type="button" onClick={() => handleClick('9')} value={marcaJogador(value[9])}>
                      {marcaJogador(value[9])}
                    </button>
                  </div>
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
