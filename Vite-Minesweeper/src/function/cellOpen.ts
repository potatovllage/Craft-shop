import { Cell } from "../interface/store";

export function openSafeCells(x: number, y: number, board: Cell[][]): Cell[][] {
  const newBoard = [...board];

  function open(x: number, y: number) {
    if (newBoard[x][y].isOpen === false) {
      newBoard[x][y].isOpen = true;

      if (newBoard[x][y].value === 0) {
        if (y > 0) {
          open(x, y - 1);
        }
        if (x > 0) {
          open(x - 1, y);
        }
        if (x < 9) {
          open(x + 1, y);
        }
        if (y < 9) {
          open(x, y + 1);
        }
      } else if (newBoard[x][y].value === -1) {
        alert("GAME OVER");
        newBoard.forEach((row) => {
          row.filter((cell) => cell.value === -1 && (cell.isOpen = true));
        });
      }
    }
  }

  open(x, y);

  return newBoard;
}
