  import { WINNER_COMBOS } from '../constants'
  export const checkWinner = (boardToCheck) => {
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