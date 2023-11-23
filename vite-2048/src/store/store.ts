import { create } from 'zustand';

import type { GameSetting } from '../types';
import { moveCells } from '../utils/moveCells';
import { settingBoard } from '../utils/settingBoard';
export const useGameStore = create<GameSetting>((set) => ({
  board: Array.from(new Array(4), () => {
    return new Array(4).fill(0).map(() => {
      return {
        value: 0,
      };
    });
  }),
  isStart: false,
  scoreCount: 0,

  settingGame: () => {
    // 게임 보드 초기화
    const initialBoard = Array.from(new Array(4), () => {
      return new Array(4).fill(0).map(() => {
        return {
          value: 0,
        };
      });
    });

    // 새로운 셀 배치
    const newBoard = settingBoard(initialBoard);

    set({
      isStart: true,
      scoreCount: 0,
      board: newBoard,
    });
  },
  setScoreCount: () =>
    set((state) => ({
      scoreCount: state.scoreCount + 2,
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
