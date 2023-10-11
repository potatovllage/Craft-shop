import { useEffect } from "react";
import "./Game.css";
import Square from "../square/Square";
import { useGameState } from "../../store";
import { useGameResult } from "../../hooks/useResultGame";

function Game() {
  const { gameReset, board, isCheck, setBoard, setIsCheck } = useGameState();
  const { checkGameResult } = useGameResult();

  const handleCheck = (index: number) => {
    const square = board.slice();
    if (square[index]) {
      return;
    }
    square[index] = isCheck ? "X" : "O";
    setBoard(square);
    setIsCheck(!isCheck);
  };

  useEffect(() => {
    const result = checkGameResult(board);
    if (result) {
      alert(`게임 결과: ${result}`);
    }
  }, [board, checkGameResult]);

  return (
    <div className="Wrapper">
      <button onClick={gameReset}>ReStart</button>
      <div className="board">
        {board.map((_, index) => (
          <Square
            key={index}
            onClick={() => handleCheck(index)}
            value={board[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
