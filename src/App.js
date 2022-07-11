import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const emptyBoard = Array(9).fill('');
  const [ board, setBoard ] = useState(emptyBoard);
  const [ currentPlayer, setCurrentPlayer ] = useState('O');
  const [ winner, setWinner ] = useState();

  const handleClick = (index) => {
    if (winner) {
      alert(`${winner} venceu!!!`);
    };
    if (board[index] !== '') return null;
    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
    setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O')
  }

  const checkWinner = () => {
    const possilbleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[9]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[9]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]]
    ];

    possilbleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === "O")) setWinner('O');
      if (cells.every(cell => cell === "X")) setWinner('X');
    });
  }

  useEffect(() => {
    if (winner) alert(`${winner} venceu!!!`);
    checkWinner();
  })

  const resetGame = () => {
    // setCurrentPlayer(winner);
    // setBoard(emptyBoard);
    // setWinner(null);
    window.location.reload();
  }

  return (
    <main>
      <div className={`board ${winner ? 'game-over' : null}`}>
        { board.map( (item, index) => (
          <div 
            key={ index }
            className={ `cell ${item}` }
            onClick={ () => handleClick(index) }
          >
            { item }
          </div>
        )) }
      </div>
      <button
        className='resetGame'
        onClick={resetGame}
      >
        Reiniciar Jogo!
      </button>
    </main>
  )
}

export default App;