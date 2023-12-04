export interface CellProps {
  key: string;
  x: number;
  y: number;
  value: number;
}

export type Row = CellProps[];

export type DirectionKey = 'up' | 'down' | 'left' | 'right';

export interface GameSetting {
  board: Row[];
  isStarted: boolean;
  score: number;

  moveCells: (direction: DirectionKey) => void;
  setScoreCount: () => void;
  settingGame: () => void;
}
