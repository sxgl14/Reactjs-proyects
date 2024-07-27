import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {    //
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    if (board[index]) return    //If the position already has an item, it is not updated
    const newBoard = [...board]  //Update the board for that appear the X or O
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ?  TURNS.O : TURNS.X //If the turn already was of X, the next turn be for O and vice versa
    setTurn(newTurn)
  }

  return (
    <main className='board'>
      <h1>THREE IN LINE</h1>
      <section className='game'>
        {
          board.map((cell, index) => {  //Board where elements X and O appear
            return(
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
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>  {/* Desing where it shows the turn */}
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
    )
}

export default App
