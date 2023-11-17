export interface CellProps {
  value: number;
}

export type Row = CellProps[];

export interface GameSetting {
  board: Row[];
  isStart: boolean;
  scoreCount: number;

  setScoreCount: () => void;
  settingGame: () => void;
}
