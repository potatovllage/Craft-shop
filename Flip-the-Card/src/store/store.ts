import { create } from 'zustand';

import type { GameSetting } from '../types';

export const useGameStore = create<GameSetting>((set) => ({
  isStart: false,
  flipCount: 28,
  clickedCards: [],

  settingGame: () =>
    set({
      isStart: true,
      flipCount: 28,
    }),

  setFlipCount: () =>
    set((state) => ({
      flipCount: state.flipCount - 1,
    })),

  setClickedCard: (imageUrl) =>
    set((state) => {
      if (imageUrl === '') {
        return { clickedCards: [] };
      } else {
        return { clickedCards: [...state.clickedCards, String(imageUrl)] };
      }
    }),
}));
