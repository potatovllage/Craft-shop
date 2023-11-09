import { CardArrayProps } from "../types";

export function shuffleCards(board: CardArrayProps[]) {
  board.sort(() => Math.random() - 0.5);
}
