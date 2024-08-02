import { Square } from "./Square.jsx"

export function GameBoard({ board, updateBoard }){
    
    const gameBoard = board.map((square, index) => {
        return(
            <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
            >
                {square}
            </Square>
        )
    })

    return (
        <section className="game">
            {gameBoard}
        </section>
    )
}