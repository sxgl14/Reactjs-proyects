import { useState } from "react"

import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkEndGame, checkWinnerFrom } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"
import { GameBoard } from "./components/GameBoard.jsx"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(winner === TURNS.O ? TURNS.O : TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return    //If the position already has an item, it is not updated

    const newBoard = [...board]  //Update the board for that appear the X or O

    newBoard[index] = turn //Change the turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X //If the turn already was of X, the next turn be for O and vice versa
    setTurn(newTurn)

    // Save the game

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>THREE IN LINE</h1>
      <GameBoard board={board} updateBoard={updateBoard}/> { /* Board game */ }

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>  { /* Desing where it shows the turn */ }
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <br/>
      <button onClick={resetGame}>Reset Game</button>

      <WinnerModal resetGame={resetGame} winner={winner}/>  { /* Show the winner */ }
    </main>
    )
}

export default App
