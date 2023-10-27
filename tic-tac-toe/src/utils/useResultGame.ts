export function useGameResult() {
  const calculateWinner = (board: Array<string | null>): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const item of lines) {
      const [a, b, c] = item;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkGameResult = (board: Array<string | null>): string | null => {
    const winner = calculateWinner(board);
    if (winner) {
      return `${winner} 이(가) 이겼습니다!`;
    } else if (board.every((square) => square)) {
      return "무승부!";
    }
    return null;
  };

  return { checkGameResult };
}
