import { useState } from "react";
import "./App.css";

const TURNS = {
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ""}`

  const handelClick = () => {
    updateBoard(index)
  }
  return <div onClick={handelClick} className={className}>
      {children}
    </div>;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {

    //No actualizas la posicion si ya tiene algo 
    if(board[index]) return

    /*Hacer una copia del tablero para actualizarlo ya que no se debe mutar el estado directamente. 
    Siempre deben ser nuevos los datos del renderizado
    */
   
    const newBoard = [...board]
    //Pasar el valor del turno a la opcion que seleccionó el usuario
    newBoard[index] = turn
    //Actualizar el tablero
    setBoard(newBoard)
    //Cambiar el turno dependiendo del turno actual
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    //Actualizar el turno
    setTurn(newTurn)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  );
}

export default App;
