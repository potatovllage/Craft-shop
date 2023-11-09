export interface CardProps {
  id: number;
  image: string;
  isOpen: boolean;
}

export interface GameSetting {
  isStart: boolean;
  board: CardProps[];
  flipCount: number;
  clickedCards: string[];

  settingGame: () => void;
  openCard: (id: number, imageUrl: string) => void;
  setGameResult: () => void;
  setClickedCard: (imageUrl: string | []) => void;
}
