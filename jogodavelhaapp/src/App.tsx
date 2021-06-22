import { stringify } from 'querystring';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const bucasEstadoInicial = () =>{
    const state = []
    for(let casas = 0; casas < 9; casas ++){
      state[casas] = 0;
    }
    return state;
  }

  const [jogador, setJogador] = useState(1);
  const [valor, setValor] = useState(bucasEstadoInicial);
  const [vencedor, setVencedor] = useState<Number>(0);

  const reiniciarPartida = () => {
    setValor(bucasEstadoInicial());
    setJogador(1)
  }

  const colunas = [0, 1 , 2, 3, 4, 5, 6, 7, 8];

  const encontraVencedor = () => {
    const combinacoes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6]
    ]
  }

  const acaoClick = (key: number) => {
    if(valor[key]){
      return;
    }
    const valores = {
      ...valor,
      [key]: jogador
    }
    setValor(valores);
    setJogador(jogador * -1)
    console.log(encontraVencedor());
  }

  const defineJogador = (jogador: number) => {
    let define = '';
    if(jogador === 1){
      define= 'L';
    }
    if(jogador === -1){
      define = '2';
    }
    if(jogador === 0){
      define = '';
    }
    return define;
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
              <p>Jogando agora: {jogador === 1 ? 'Humano' : 'Bot'}</p>
              <p>Vencedor: </p>
          </div>
          <div className="tabuleiro">
            {
              colunas.map((b) => (
                <button key={b} type="button" onClick={() => acaoClick(b)} value={defineJogador(valor[b])}>
                      {defineJogador(valor[b])}
                </button>
              ))
            }
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
                <button onClick={() => reiniciarPartida()}>Reiniciar partida</button>
                <button>Riniciar placar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
