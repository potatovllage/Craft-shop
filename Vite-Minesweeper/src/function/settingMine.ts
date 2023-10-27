import { Cell } from "../interface/store";
import { getRandomInt } from "./random";

export function settingMine(board: Cell[][]) {
  const newBoard = [...board];

  for (let i = 0; i < 10; i++) {
    const random_x = getRandomInt(10);
    const random_y = getRandomInt(10);

    if (newBoard[random_x][random_y].value === -1) {
      i--;
      continue;
    }

    newBoard[random_x][random_y].value = -1;
  }

  return newBoard;
}
