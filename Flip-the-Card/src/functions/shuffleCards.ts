import { CardProps } from "../types";

export function shuffleCards(board: CardProps[]) {
  board.sort(() => Math.random() - 0.5);
}
