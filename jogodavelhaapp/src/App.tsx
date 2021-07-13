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
    setVencedor(0)
  }

  const colunas = [
    0, 1 , 2,
    3, 4, 5,
    6, 7, 8
  ];

  const encontraVencedor = () => {
    const combinacoes = [
      [valor[0], valor[1], valor[2]],
      [valor[3], valor[4], valor[5]],
      [valor[6], valor[7], valor[8]],
      [valor[0], valor[3], valor[6]],
      [valor[1], valor[4], valor[7]],
      [valor[2], valor[5], valor[8]],
      [valor[0], valor[4], valor[8]],
      [valor[2], valor[4], valor[6]]
    ];
    // tornar dinâmica a comparação do resultado (usar apenas um if ao invés de dois if's).
    combinacoes.forEach(e => {
      if(e.every(e => e === -1)){
        alert('O Computador Ganhou')
        setVencedor(-1)
      }
      else if(e.every(e => e === 1)){
        alert('Você Ganhou')
        setVencedor(1)
      }
    })
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
    setJogador(jogador * -1);
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
  
  useEffect(() =>{
    encontraVencedor()
  },[valor]);

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
              <p>Vencedor: {vencedor === 1 ? 'Humano' : vencedor === -1 ? 'Bot' : ''}</p>
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
