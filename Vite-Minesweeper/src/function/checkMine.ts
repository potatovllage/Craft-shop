import { Cell } from "../interface/store";

export function checkMine(board: Cell[][]) {
  const newBoard = [...board];

  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      let mineCount = 0;
      if (newBoard[x][y].value === -1) continue;

      // 윗쪽 줄 체크
      if (y > 0) {
        newBoard[x][y - 1].value === -1 ? mineCount++ : 0;
        if (x > 0) {
          newBoard[x - 1][y - 1].value === -1 ? mineCount++ : 0;
        }
        if (x < 9) {
          newBoard[x + 1][y - 1].value === -1 ? mineCount++ : 0;
        }
      }

      // 왼쪽 줄 체크
      if (x > 0) {
        newBoard[x - 1][y].value === -1 ? mineCount++ : 0;
      }

      // 오른쪽 줄 체크
      if (x < 9) {
        newBoard[x + 1][y].value === -1 ? mineCount++ : 0;
      }

      // 아랫쪽 줄 체크
      if (y < 9) {
        newBoard[x][y + 1].value === -1 ? mineCount++ : 0;
        if (x > 0) {
          newBoard[x - 1][y + 1].value === -1 ? mineCount++ : 0;
        }
        if (x < 9) {
          newBoard[x + 1][y + 1].value === -1 ? mineCount++ : 0;
        }
      }

      newBoard[x][y].value = mineCount;
    }
  }

  return newBoard;
}
