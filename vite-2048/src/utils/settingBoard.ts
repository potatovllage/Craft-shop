import type { CellProps } from '../types';
import { getRandomInt } from './random';

export function settingBoard(board: CellProps[][]) {
  const newBoard = [...board];

  for (let index = 0; index < 2; index++) {
    const randomX = getRandomInt();
    const randomY = getRandomInt();

    if (newBoard[randomX][randomY].value) {
      index--;
      continue;
    }

    newBoard[randomX][randomY].value = 2;
  }

  return newBoard;
}
