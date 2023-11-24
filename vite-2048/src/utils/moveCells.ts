import type { CellProps, DirectionKey } from '../types';

export function moveCells(board: CellProps[][], direction: DirectionKey) {
  const newBoard = board.map((row) =>
    row.map((cell) => {
      {
        return cell;
      }
    }),
  );

  switch (direction) {
    case 'up': {
      for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
        for (let rowIndex = 1; rowIndex < 4; rowIndex++) {
          mergeCell(board, rowIndex, columnIndex, 'up');
        }
      }
      break;
    }
    case 'down': {
      for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
        for (let rowIndex = 2; rowIndex >= 0; rowIndex--) {
          mergeCell(board, rowIndex, columnIndex, 'down');
        }
      }
      break;
    }
    case 'left': {
      for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (let columnIndex = 1; columnIndex < 4; columnIndex++) {
          mergeCell(board, rowIndex, columnIndex, 'left');
        }
      }
      break;
    }
    case 'right': {
      for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
        for (let columnIndex = 2; columnIndex >= 0; columnIndex--) {
          mergeCell(board, rowIndex, columnIndex, 'right');
        }
      }
      break;
    }
    default: {
      break;
    }
  }
  addNewCell(newBoard);
  return newBoard;
}

function mergeCell(
  board: CellProps[][],
  rowIndex: number,
  columnIndex: number,
  direction: DirectionKey,
) {
  // 현재 위치의 셀이 값이 0이 아닌 경우에만 합치기 로직을 수행
  if (board[rowIndex][columnIndex].value === 0) {
    return;
  }

  let currentRow = rowIndex;
  let currentCol = columnIndex;

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

// 특정 위치에서 주어진 방향으로 이동 가능한지 여부를 판단하는 canMove 함수
function canMove(
  board: CellProps[][],
  rowIndex: number,
  columnIndex: number,
  direction: DirectionKey,
) {
  const nextRow = getNextRow(rowIndex, direction);
  const nextCol = getNextCol(columnIndex, direction);

  return (
    nextRow >= 0 &&
    nextRow < 4 &&
    nextCol >= 0 &&
    nextCol < 4 &&
    (board[nextRow][nextCol].value === 0 ||
      board[nextRow][nextCol].value === board[rowIndex][columnIndex].value)
  );
}

// 다음 행을 반환하는 getNextRow 함수
function getNextRow(rowIndex: number, direction: DirectionKey) {
  switch (direction) {
    case 'up': {
      return rowIndex - 1;
    }
    case 'down': {
      return rowIndex + 1;
    }
    default: {
      return rowIndex;
    }
  }
}

// 다음 열을 반환하는 getNextCol 함수
function getNextCol(columnIndex: number, direction: DirectionKey) {
  switch (direction) {
    case 'left': {
      return columnIndex - 1;
    }
    case 'right': {
      return columnIndex + 1;
    }
    default: {
      return columnIndex;
    }
  }
}

function addNewCell(board: CellProps[][]) {
  // 빈 셀의 위치를 찾아서 배열에 저장
  const emptyCells = [];
  for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
      if (board[rowIndex][columnIndex].value === 0) {
        emptyCells.push({ rowIndex, columnIndex });
      }
    }
  }

  // 빈 셀이 없으면 추가하지 않음
  if (emptyCells.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const { rowIndex, columnIndex } = emptyCells[randomIndex];

  return (board[rowIndex][columnIndex].value = Math.random() < 0.9 ? 2 : 4);
}
