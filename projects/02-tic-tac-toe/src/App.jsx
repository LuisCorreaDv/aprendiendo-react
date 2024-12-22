import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handelClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handelClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  //null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null) 

  const checkWinner = (boardToCheck) => {
    //Checar todas las combinaciones ganadoras
    //para ver si X u O ganó 
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck [a] && //0 -> X u O
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // X u O
      }
    } 
    //No hay ganador
    return null
  }

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
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <section>
        {winner != null && (
          <section className="winner">
            <div className="text">
              <h2>{winner == false 
                ? "Empate" 
                : "Ganó"}
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

export default App;
