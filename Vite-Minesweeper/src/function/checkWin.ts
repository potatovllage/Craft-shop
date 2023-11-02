import { Cell } from "../interface/store";

export function checkWin(board: Cell[][]) {
  const newBoard = [...board];

  const openCellCount = newBoard
    .map((item) => item.filter((cell) => cell.isOpen === true).length)
    .reduce((x, y) => x + y);

  if (openCellCount === 90) {
    alert("GAME WIN");
  }
}
