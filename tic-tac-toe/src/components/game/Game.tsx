import "./Game.css";
import Square from "../square/Square";
import { useGameState } from "../../store";

function Game() {
  const { resetGame, board, isCheck, setBoard, setIsCheck } = useGameState();

  const handleCheck = (i: number) => {
    const square = board.slice();
    if (square[i]) {
      return;
    }
    square[i] = isCheck ? "X" : "O";
    setBoard(square);
    setIsCheck(!isCheck);
  };

  return (
    <div className="Wrapper">
      <button onClick={resetGame}>ReStart</button>
      <div className="board">
        {board.map((_, index) => (
          <Square onClick={() => handleCheck(index)} value={board[index]} />
        ))}
      </div>
    </div>
  );
}

export default Game;
