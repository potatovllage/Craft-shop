export interface Cell {
  value: number;
  isOpen: boolean;
  isPutFlag: boolean;
}

export interface GameSetting {
  board: Cell[][];
  gameReset: () => void;
  putFlag: (position: { x: number; y: number }) => void;
  removeFlag: (position: { x: number; y: number }) => void;
  openCell: (position: { x: number; y: number }) => void;
}

export interface CellProps {
  coordinate_X: number;
  coordinate_Y: number;
  cell: number;
  isPutFlag: boolean;
  isOpen: boolean;
  isMine: number;
  isNone: number;
}
