import { create } from "zustand";
import { GameSetting } from "../types";
import { shuffleCards } from "../functions/shuffleCards";
import { finalCardArray } from "../config";

export const useGameStore = create<GameSetting>((set) => ({
  board: finalCardArray,
  isStart: false,
  flipCount: 28,
  clickedCards: Array.from([]),

  settingGame: () =>
    set((state) => {
      state.flipCount = 36;
      state.board.map((card) => (card.isOpen = false));
      const shuffleBoard = shuffleCards(state.board);
      return { ...state, shuffleBoard };
    }),

  openCard: (id, imageUrl) =>
    set((state) => {
      // 카드 열기
      state.board.some((value) => {
        if (value.id === id) {
          value.isOpen = !value.isOpen;
          state.flipCount--;
          return true;
        } else {
          return false;
        }
      });
      state.setClickedCard(imageUrl);

      // 카드 비교하기
      setTimeout(() => {
        if (state.clickedCards.length === 2) {
          const firstCard = state.board.find(
            (card) => card.image === state.clickedCards[0]
          )?.id;
          const secondCard = state.board.find(
            (card) => card.image === state.clickedCards[1]
          )?.id;
          // 두 카드가 같지 않은 경우
          if (firstCard !== secondCard) {
            state.board.forEach((card) => {
              if (
                card.image === state.clickedCards[0] ||
                card.image === state.clickedCards[1]
              ) {
                card.isOpen = false;
              }
            });
          }
          // 같지 않을 경우 열린 카드 저장하는 배열 초기화
          state.setClickedCard([]);
          state.clickedCards.splice(0, state.clickedCards.length);
        }
      }, 500);

      state.setGameResult();

      return { ...state };
    }),

  setGameResult: () =>
    set((state) => {
      if (state.flipCount === 0) {
        alert("GAME OVER");
      } else if (state.board.every((card) => card.isOpen === true)) {
        alert("GAME WIN");
      }
      return state;
    }),

  setClickedCard: (imageUrl) =>
    set((state) => {
      state.clickedCards.push(String(imageUrl));
      return { ...state };
    }),
}));
