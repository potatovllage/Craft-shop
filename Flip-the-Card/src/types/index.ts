export interface CardArrayProps {
  id: number;
  image: string;
  isOpen: boolean;
}

export interface GameSetting {
  isStart: boolean;
  flipCount: number;
  clickedCards: string[];

  settingGame: () => void;
  setClickedCard: (imageUrl: string) => void;
  setFlipCount: () => void;
}

export interface CardComponentProps {
  id: number;
  index: number;
  image: string;
  isOpen: boolean;
  onClick?: () => void;
}
