import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import { TURNS } from "./constants";
import { checkWinner } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  //null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null) 

  const resetGame = () => { 
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X);
    setWinner(null);
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    //No actualizas la posicion si ya tiene algo
    if (board[index] || winner) return;

    /*Hacer una copia del tablero para actualizarlo ya que no se debe mutar el estado directamente. 
    Siempre deben ser nuevos los datos del renderizado
    */
    const newBoard = [...board];
    //Pasar el valor del turno a la opcion que seleccionó el usuario
    newBoard[index] = turn;
    //Actualizar el tablero
    setBoard(newBoard);
    //Cambiar el turno dependiendo del turno actual
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    //Actualizar el turno
    setTurn(newTurn);

    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //Empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  );
}

export default App;
