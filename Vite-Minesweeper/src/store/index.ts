import { create } from "zustand";
import { GameSetting } from "../interface/store";
import { settingMine } from "../function/settingMine";
import { checkMine } from "../function/checkMine";
import { openSafeCells } from "../function/cellOpen";

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

  // 지뢰 랜덤 섞은 후 게임 시작
  gameStart: () => {
    set((state) => {
      const settingBoard = settingMine(state.board);
      const checkBoard = checkMine(settingBoard);
      state.isStart = true;

      return { board: checkBoard };
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
      const updatedBoard = openSafeCells(position.x, position.y, state.board);
      return { board: updatedBoard };
    }),
}));
