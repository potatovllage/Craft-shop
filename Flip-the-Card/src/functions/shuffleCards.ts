import type { CardArrayProps } from '../types';

export function shuffleCards(board: CardArrayProps[]) {
  return [...board].sort(() => Math.random() - 0.5);
}
