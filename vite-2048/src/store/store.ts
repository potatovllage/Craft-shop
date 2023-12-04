import { create } from 'zustand';

import type { GameSetting } from '../types';
import { initialBoard } from '../utils/initialBoard';
import { moveCells } from '../utils/moveCells';
import { settingBoard } from '../utils/settingBoard';
export const useGameStore = create<GameSetting>((set) => ({
  board: initialBoard(),
  isStarted: false,
  score: 0,

  settingGame: () => {
    const newBoard = settingBoard(initialBoard());

    set({
      isStarted: true,
      score: 0,
      board: newBoard,
    });
  },
  setScoreCount: () =>
    set((state) => ({
      score: state.score + 2,
    })),

  moveCells: (direction) => {
    set((state) => {
      const newBoard = moveCells(state.board, direction);

      return {
        board: newBoard,
      };
    });
  },
}));
