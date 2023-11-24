import type { CellProps } from '../types';

export const checkGameStatus = (board: CellProps[][]) => {
  // 2048이면 게임 승리
  for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      if (board[rowIndex][columnIndex].value === 2048) {
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
  for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      const currentValue = board[rowIndex][columnIndex].value;

      if (
        currentValue !== 0 &&
        checkCombineValue(board, rowIndex, columnIndex, currentValue)
      ) {
        return true;
      }
    }
  }

  return false; // 더 이상 합칠 수 없음
};

const checkCombineValue = (
  board: CellProps[][],
  rowIndex: number,
  columnIndex: number,
  currentValue: number,
) => {
  return (
    (rowIndex > 0 && board[rowIndex - 1][columnIndex].value === currentValue) ||
    (rowIndex < 3 && board[rowIndex + 1][columnIndex].value === currentValue) ||
    (columnIndex > 0 &&
      board[rowIndex][columnIndex - 1].value === currentValue) ||
    (columnIndex < 3 && board[rowIndex][columnIndex + 1].value === currentValue)
  );
};

const isBoardFull = (board: CellProps[][]) => {
  for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      if (board[rowIndex][columnIndex].value === 0) {
        return false;
      }
    }
  }
  return true;
};
