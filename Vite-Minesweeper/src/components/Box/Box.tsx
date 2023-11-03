import "./Box.css";
import { CellProps } from "../../types/store";
import { useGameStore } from "../../store/store";

function Box({ cell, x, y }: CellProps) {
  const { putFlag, removeFlag, openCell, gameStart, isStart } = useGameStore();
  const { isPutFlag, isOpen } = cell;

  const onLeftClickHandler = () => {
    if (isStart === false) {
      gameStart();
    }
    openCell({ x: x, y: y });
  };

  const onRightClickHandler = () => {
    if (isPutFlag === false) {
      putFlag({ x: x, y: y });
    } else {
      removeFlag({ x: x, y: y });
    }
  };

  const cellValue = cell.isCount === 0 ? "" : cell.isBomb ? "💣" : cell.isCount;

  return (
    <div className="GridWrapper">
      <button
        className="GridButton"
        disabled={isOpen}
        onClick={onLeftClickHandler}
        onContextMenu={(e) => {
          e.preventDefault();
          onRightClickHandler();
        }}
      >
        {isPutFlag ? "🚩" : ""}
      </button>
      <div className="GridItem">{cellValue}</div>
    </div>
  );
}

export default Box;
