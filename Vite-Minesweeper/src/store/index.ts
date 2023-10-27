import { create } from "zustand";
import { GameSetting } from "../interface/store";
import { settingMine } from "../function/settingMine";

export const useGameStore = create<GameSetting>((set) => ({
  // 게임 세팅
  isStart: false,
  board: Array.from(Array(10), () => {
    return Array(10)
      .fill(undefined)
      .map(() => {
        return { value: 0, isOpen: false, isPutFlag: false };
      });
  }),
  gameStart: () => {
    set((state) => {
      const newBoard = settingMine(state.board);
      state.isStart = true;
      return { board: newBoard };
    });
  },

  // 깃발 생성 및 제거
  putFlag: (position: { x: number; y: number }) =>
    set((state) => {
      const updatedBoard = [...state.board];
      const cell = { ...updatedBoard[position.x][position.y] };
      cell.isPutFlag = true;
      updatedBoard[position.x][position.y] = cell;

      return { board: updatedBoard };
    }),
  removeFlag: (position: { x: number; y: number }) =>
    set((state) => {
      const updatedBoard = [...state.board];
      const cell = { ...updatedBoard[position.x][position.y] };
      cell.isPutFlag = false;
      updatedBoard[position.x][position.y] = cell;

      return { board: updatedBoard };
    }),

  // cell 열기
  openCell: (position: { x: number; y: number }) =>
    set((state) => {
      const updatedBoard = [...state.board];
      const cell = { ...updatedBoard[position.x][position.y] };
      if (cell.isPutFlag === false) {
        cell.isOpen = true;
      }
      if (cell.value === -1) {
        alert("GAME OVER");
      }
      updatedBoard[position.x][position.y] = cell;

      return { board: updatedBoard };
    }),
}));
