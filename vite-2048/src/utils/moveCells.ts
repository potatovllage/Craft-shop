import type { CellProps, DirectionKey } from '../types';

export function moveCells(board: CellProps[][], direction: DirectionKey) {
  const newBoard = board.map((row) => [...row]);

  switch (direction) {
    case 'up': {
      for (let col = 0; col < 4; col++) {
        for (let row = 1; row < 4; row++) {
          if (newBoard[row][col].value !== 0) {
            let currentRow = row;
            while (
              currentRow > 0 &&
              newBoard[currentRow - 1][col].value === 0
            ) {
              // 현재 셀이 이동 가능한 경우, 위로 이동
              newBoard[currentRow - 1][col].value =
                newBoard[currentRow][col].value;
              newBoard[currentRow][col].value = 0;
              currentRow--;
            }
          }
        }
      }
      break;
    }
    case 'down': {
      for (let col = 0; col < 4; col++) {
        for (let row = 2; row >= 0; row--) {
          if (newBoard[row][col].value !== 0) {
            let currentRow = row;
            while (
              currentRow < 3 &&
              newBoard[currentRow + 1][col].value === 0
            ) {
              newBoard[currentRow + 1][col].value =
                newBoard[currentRow][col].value;
              newBoard[currentRow][col].value = 0;
              currentRow++;
            }
          }
        }
      }
      break;
    }
    case 'left': {
      for (let row = 0; row < 4; row++) {
        for (let col = 1; col < 4; col++) {
          if (newBoard[row][col].value !== 0) {
            let currentCol = col;
            while (
              currentCol > 0 &&
              newBoard[row][currentCol - 1].value === 0
            ) {
              newBoard[row][currentCol - 1].value =
                newBoard[row][currentCol].value;
              newBoard[row][currentCol].value = 0;
              currentCol--;
            }
          }
        }
      }
      break;
    }
    case 'right': {
      for (let row = 0; row < 4; row++) {
        for (let col = 2; col >= 0; col--) {
          if (newBoard[row][col].value !== 0) {
            let currentCol = col;
            while (
              currentCol < 3 &&
              newBoard[row][currentCol + 1].value === 0
            ) {
              newBoard[row][currentCol + 1].value =
                newBoard[row][currentCol].value;
              newBoard[row][currentCol].value = 0;
              currentCol++;
            }
          }
        }
      }
      break;
    }
    default: {
      break;
    }
  }

  return newBoard;
}
