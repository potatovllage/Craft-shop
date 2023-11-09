export interface CardArrayProps {
  id: number;
  image: string;
  isOpen: boolean;
}

export interface GameSetting {
  isStart: boolean;
  board: CardArrayProps[];
  flipCount: number;
  clickedCards: string[];

  settingGame: () => void;
  openCard: (id: number, imageUrl: string) => void;
  setGameResult: () => void;
  setClickedCard: (imageUrl: string | []) => void;
}

export interface CardComponentProps {
  id: number;
  image: string;
  isOpen: boolean;
  onClick?: () => void;
}
