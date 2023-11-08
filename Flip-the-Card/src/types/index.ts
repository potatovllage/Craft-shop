export interface CardProps {
  id: number;
  image: string;
  isOpen: boolean;
}

export interface GameSetting {
  isStart: boolean;
  pairCardsCount: number;
  board: CardProps[];
  gameResult: "WIN" | "DEFEAT" | "STANDBY";
  flipCount: number;
  clickedCard: never[];

  settingGame: () => void;
  setPairCardsCount: () => void;
  openCard: (index: number) => void;
  setGameResult: () => void;
  setClickedCard: (index: number) => void;
}
