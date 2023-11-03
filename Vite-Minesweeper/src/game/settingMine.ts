import { Cell } from "../types/store";
import { getRandomInt } from "./random";

export function settingMine(board: Cell[][]) {
  const newBoard = [...board];

  for (let i = 0; i < 10; i++) {
    const randomX = getRandomInt(10);
    const randomY = getRandomInt(10);

    if (newBoard[randomX][randomY].isBomb) {
      i--;
      continue;
    }

    newBoard[randomX][randomY].isBomb = true;
    newBoard[randomX][randomY].isCount = false;
  }

  return newBoard;
}
