import { Cell } from "../types/store";

export function checkWin(board: Cell[][]) {
  const newBoard = [...board];

  const openCellCount = newBoard
    .map((row) => row.filter((cell) => cell.isOpen).length)
    .reduce((x, y) => x + y);

  if (openCellCount === 90) {
    alert("GAME WIN");
  }
}
