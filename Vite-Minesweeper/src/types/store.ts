export interface Cell {
  isBomb: boolean;
  isCount: number | boolean;
  isOpen: boolean;
  isPutFlag: boolean;
}

type Row = Cell[];

export interface GameSetting {
  isStart: boolean;
  board: Row[];
  gameStart: () => void;
  putFlag: (position: { x: number; y: number }) => void;
  removeFlag: (position: { x: number; y: number }) => void;
  openCell: (position: { x: number; y: number }) => void;
}

export interface CellProps {
  x: number;
  y: number;
  cell: Cell;
}
