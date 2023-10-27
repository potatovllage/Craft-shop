import { create } from "zustand";

interface TicTacToeGame {
  board: Array<string>;
  isChecked: boolean;
  setBoard: (board: Array<string>) => void;
  setIsChecked: (isCheck: boolean) => void;
  resetGame: () => void;
}

export const useGameState = create<TicTacToeGame>((set) => ({
  board: Array(9).fill(null),
  isChecked: true,
  setBoard: (board) => set({ board }),
  setIsChecked: (isChecked) => set({ isChecked }),
  resetGame: () =>
    set({
      board: Array(9).fill(null),
      isChecked: true,
    }),
}));
