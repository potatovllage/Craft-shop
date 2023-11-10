import { create } from 'zustand';

import { finalCardArray } from '../config';
import { shuffleCards } from '../functions/shuffleCards';
import type { GameSetting } from '../types';

export const useGameStore = create<GameSetting>((set) => ({
  board: finalCardArray,
  isStart: false,
  flipCount: 28,
  clickedCards: [],

  settingGame: () =>
    set((state) => {
      state.isStart = true;
      state.board.map((card) => (card.isOpen = false));
      const shuffleBoard = shuffleCards(state.board);
      return { ...state, shuffleBoard };
    }),

  openCard: (id, imageUrl) =>
    set((state) => {
      // 카드 열기
      if (state.isStart) {
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
      } else {
        alert('Start를 눌러주세요!');
      }

      // 카드 비교하기
      setTimeout(() => {
        if (state.clickedCards.length === 2) {
          const firstCard = state.board.find(
            (card) => card.image === state.clickedCards[0],
          )?.id;
          const secondCard = state.board.find(
            (card) => card.image === state.clickedCards[1],
          )?.id;
          // 두 카드가 같지 않은 경우
          if (firstCard !== secondCard) {
            for (const card of state.board) {
              if (
                card.image === state.clickedCards[0] ||
                card.image === state.clickedCards[1]
              ) {
                card.isOpen = false;
              }
            }
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
        alert('GAME OVER');
      } else if (state.board.every((card) => card.isOpen === true)) {
        alert('GAME WIN');
      }
      return state;
    }),

  setClickedCard: (imageUrl) =>
    set((state) => {
      state.clickedCards.push(String(imageUrl));
      return { ...state };
    }),
}));
