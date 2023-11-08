import { create } from "zustand";
import { GameSetting } from "../types";
import { shuffleCards } from "../functions/shuffleCards";
import { cardArray } from "../config";

export const useGameStore = create<GameSetting>((set) => ({
  board: cardArray,
  isStart: false,
  pairCardsCount: 0,
  gameResult: "STANDBY",
  flipCount: 36,
  clickedCard: Array.from([]),

  settingGame: () =>
    set((state) => {
      const shuffleBoard = shuffleCards(state.board);
      return { ...state, shuffleBoard };
    }),

  setPairCardsCount: () =>
    set((state) => ({
      pairCardsCount: state.pairCardsCount++,
    })),

  openCard: (index) =>
    set((state) => {
      state.board.some((value) => {
        if (value.id === index) {
          value.isOpen = !value.isOpen;
          state.flipCount--;
          return true;
        } else {
          return false;
        }
      });
      state.setClickedCard(index);
      return { ...state };
    }),

  setGameResult: () => {},

  setClickedCard: () => {},
}));
