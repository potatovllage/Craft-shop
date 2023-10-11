import { create } from "zustand";

interface TicTacToeGame {
  board: Array<string>;
  isCheck: boolean;
  setBoard: (board: Array<string>) => void;
  setIsCheck: (isCheck: boolean) => void;
  resetGame: () => void;
}

export const useGameState = create<TicTacToeGame>((set) => ({
  board: Array(9).fill(null),
  isCheck: true,
  setBoard: (board) => set({ board }),
  setIsCheck: (isCheck) => set({ isCheck }),
  resetGame: () =>
    set({
      board: Array(9).fill(null),
      isCheck: true,
    }),
}));
