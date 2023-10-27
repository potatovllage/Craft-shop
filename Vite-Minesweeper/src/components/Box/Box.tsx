import "./Box.css";
import { CellProps } from "../../interface/store";
import { useGameStore } from "../../store";

function Box({
  cell,
  coordinate_X,
  coordinate_Y,
  isOpen,
  isPutFlag,
}: CellProps) {
  const { putFlag, removeFlag, openCell, gameStart, isStart } = useGameStore();

  const onLeftClickHandler = () => {
    if (isStart === false) {
      gameStart();
    }
    openCell({ x: coordinate_X, y: coordinate_Y });
  };

  const onRightClickHandler = () => {
    if (isPutFlag === false) {
      putFlag({ x: coordinate_X, y: coordinate_Y });
    } else removeFlag({ x: coordinate_X, y: coordinate_Y });
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
