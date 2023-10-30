import "./Box.css";
import { CellProps } from "../../interface/store";
import { useGameStore } from "../../store";

function Box({ cell: cell, x, y, isOpen, isPutFlag }: CellProps) {
  const { putFlag, removeFlag, openCell, gameStart, isStart } = useGameStore();

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

  const cellValue = () => {
    if (cell === 0) {
      return "";
    } else if (cell === -1) {
      return "💣";
    }
  };

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
      <div className="GridItem">{cellValue()}</div>
    </div>
  );
}

export default Box;
