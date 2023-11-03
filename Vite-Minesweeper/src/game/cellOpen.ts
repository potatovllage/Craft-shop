import { Cell } from "../types/store";
import { checkWin } from "./checkWin";

export function openSafeCells(x: number, y: number, board: Cell[][]): Cell[][] {
  const newBoard = [...board];

  function open(x: number, y: number) {
    if (!newBoard[x][y].isOpen) {
      newBoard[x][y].isOpen = true;

      if (newBoard[x][y].isCount === 0) {
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
      } else if (newBoard[x][y].isBomb) {
        alert("GAME OVER");
        newBoard.map((row) => {
          row.map((cell) => (cell.isOpen = true));
        });
      }
    }
  }

  open(x, y);
  checkWin(newBoard);

  return newBoard;
}
