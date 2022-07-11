import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const emptyBoard = Array(9).fill("");
  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState();

  const handleClick = (index) => {
    if (winner) {
      alert(`${winner} venceu!!!`);
    }
    if (board[index] !== "") return null;
    setBoard(
      board.map((item, itemIndex) =>
        itemIndex === index ? currentPlayer : item
      )
    );
    setCurrentPlayer(currentPlayer === "O" ? "X" : "O");
  };

  const checkWinner = () => {
    const possilbleWaysToWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[9]],

      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[9]],

      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possilbleWaysToWin.forEach((cells) => {
      if (cells.every((cell) => cell === "O")) setWinner("O");
      if (cells.every((cell) => cell === "X")) setWinner("X");
    });
  };

  useEffect(() => {
    if (winner) alert(`"${winner}" venceu!!!`);
    checkWinner();
  });

  const resetGame = () => {
    // setCurrentPlayer(winner);
    // setBoard(emptyBoard);
    // setWinner(null);
    window.location.reload();
  };

  return (
    <div>
    <main>
      <div className={`board ${winner ? "game-over" : null}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="resetGame" onClick={resetGame}>
        Reiniciar Jogo!
      </button>
    </main>
    <footer id="Footer">
      <a href="https://elielsondev.github.io/my-portfolio/" 
      target="_blank" rel="noreferrer">
        <h4 id="Created">Created by: Elielson Nascimento</h4>
      </a>

      <a href="https://www.linkedin.com/in/elielsondev/"
      target="_blank" rel="noreferrer">
        <img
          width="60"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"
          alt="Linkedin"
        />
      </a>

      <a href="https://github.com/elielsondev" 
      target="_blank" rel="noreferrer">
        <img
          width="30"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
          alt="GitHub"
        />
      </a>
      </footer>
    </div>
  );
}

export default App;
