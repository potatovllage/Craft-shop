import type { CellProps } from '../types';

export const gameWinningStatus = (board: CellProps[][]) => {
  // 2048이면 게임 승리
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col].value === 2048) {
        alert('GAME WIN');
      }
    }
  }

  // 더 이상 합칠 수 없으면 게임 오버
  if (!canCombineInAnyDirection(board) && isBoardFull(board)) {
    alert('게임 오버');
  }
};

const canCombineInAnyDirection = (board: CellProps[][]) => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const currentValue = board[row][col].value;

      if (
        currentValue !== 0 &&
        ((row > 0 && board[row - 1][col].value === currentValue) ||
          (row < 3 && board[row + 1][col].value === currentValue) ||
          (col > 0 && board[row][col - 1].value === currentValue) ||
          (col < 3 && board[row][col + 1].value === currentValue))
      ) {
        return true;
      }
    }
  }

  return false; // 더 이상 합칠 수 없음
};

const isBoardFull = (board: CellProps[][]) => {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col].value === 0) {
        return false;
      }
    }
  }
  return true;
};
