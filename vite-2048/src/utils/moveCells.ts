import type { CellProps, DirectionKey } from '../types';

export function moveCells(board: CellProps[][], direction: DirectionKey) {
  const newBoard = board.map((row) => [...row]);

  switch (direction) {
    case 'up': {
      for (let col = 0; col < 4; col++) {
        for (let row = 1; row < 4; row++) {
          mergeCell(board, row, col, 'up');
        }
      }
      addNewCell(newBoard);
      break;
    }
    case 'down': {
      for (let col = 0; col < 4; col++) {
        for (let row = 2; row >= 0; row--) {
          mergeCell(board, row, col, 'down');
        }
      }
      addNewCell(newBoard);
      break;
    }
    case 'left': {
      for (let row = 0; row < 4; row++) {
        for (let col = 1; col < 4; col++) {
          mergeCell(board, row, col, 'left');
        }
      }
      addNewCell(newBoard);
      break;
    }
    case 'right': {
      for (let row = 0; row < 4; row++) {
        for (let col = 2; col >= 0; col--) {
          mergeCell(board, row, col, 'right');
        }
      }
      addNewCell(newBoard);
      break;
    }
    default: {
      break;
    }
  }

  return newBoard;
}

function mergeCell(
  board: CellProps[][],
  row: number,
  col: number,
  direction: DirectionKey,
) {
  // 현재 위치의 셀이 값이 0이 아닌 경우에만 합치기 로직을 수행
  if (board[row][col].value !== 0) {
    let currentRow = row;
    let currentCol = col;

    // 주어진 방향으로 이동 가능한 동안 반복
    while (canMove(board, currentRow, currentCol, direction)) {
      const nextRow = getNextRow(currentRow, direction);
      const nextCol = getNextCol(currentCol, direction);

      // 이동 가능한 경우
      if (board[nextRow][nextCol].value === 0) {
        // 이동 및 값 갱신
        board[nextRow][nextCol].value = board[currentRow][currentCol].value;
        board[currentRow][currentCol].value = 0;
        currentRow = nextRow;
        currentCol = nextCol;
      } else if (
        board[nextRow][nextCol].value === board[currentRow][currentCol].value
      ) {
        // 이동 가능한 셀이 같은 값을 가지고 있으면 합치기
        board[nextRow][nextCol].value *= 2;
        board[currentRow][currentCol].value = 0;

        break;
      } else {
        // 이동 불가능하면 종료
        break;
      }
    }
  }
}

// 특정 위치에서 주어진 방향으로 이동 가능한지 여부를 판단하는 canMove 함수
function canMove(
  board: CellProps[][],
  row: number,
  col: number,
  direction: DirectionKey,
) {
  const nextRow = getNextRow(row, direction);
  const nextCol = getNextCol(col, direction);

  return (
    nextRow >= 0 &&
    nextRow < 4 &&
    nextCol >= 0 &&
    nextCol < 4 &&
    (board[nextRow][nextCol].value === 0 ||
      board[nextRow][nextCol].value === board[row][col].value)
  );
}

// 다음 행을 반환하는 getNextRow 함수
function getNextRow(row: number, direction: DirectionKey) {
  switch (direction) {
    case 'up': {
      return row - 1;
    }
    case 'down': {
      return row + 1;
    }
    default: {
      return row;
    }
  }
}

// 다음 열을 반환하는 getNextCol 함수
function getNextCol(col: number, direction: DirectionKey) {
  switch (direction) {
    case 'left': {
      return col - 1;
    }
    case 'right': {
      return col + 1;
    }
    default: {
      return col;
    }
  }
}

function addNewCell(board: CellProps[][]) {
  // 빈 셀의 위치를 찾아서 배열에 저장
  const emptyCells = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col].value === 0) {
        emptyCells.push({ row, col });
      }
    }
  }

  // 빈 셀이 없으면 추가하지 않음
  if (emptyCells.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { row, col } = emptyCells[randomIndex];

  const newValue = Math.random() < 0.9 ? 2 : 4;
  board[row][col].value = newValue;
}
