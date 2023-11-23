export interface CellProps {
  value: number;
}

export type Row = CellProps[];

export type DirectionKey = 'up' | 'down' | 'left' | 'right';

export interface GameSetting {
  board: Row[];
  isStart: boolean;
  scoreCount: number;

  moveCells: (direction: DirectionKey) => void;
  setScoreCount: () => void;
  settingGame: () => void;
}
