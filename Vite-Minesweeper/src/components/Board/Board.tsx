import "./Board.css";
import Box from "../Box/Box";
import { useGameStore } from "../../store";

function Board() {
  const { board } = useGameStore();

  return (
    <div className="Wrapper">
      <button>ReStart</button>
      <div className="board">
        {board.map((rows, x) =>
          rows.map((cell, y) => (
            <Box
              key={y}
              cell={cell.value}
              coordinate_X={x}
              coordinate_Y={y}
              isMine={0}
              isNone={0}
              isOpen={cell.isOpen}
              isPutFlag={cell.isPutFlag}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
