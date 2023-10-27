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
  const { putFlag, removeFlag, openCell } = useGameStore();

  const onLeftClickHandler = () => {
    openCell({ x: coordinate_X, y: coordinate_Y });
  };

  const onRightClickHandler = () => {
    if (isPutFlag === false) {
      putFlag({ x: coordinate_X, y: coordinate_Y });
    } else removeFlag({ x: coordinate_X, y: coordinate_Y });
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
      <div className="GridItem">{cell === 0 ? "" : "🏴"}</div>
    </div>
  );
}

export default Box;
