import './cell.css';

import type { CellProps } from '../../types';

function Cell({ value }: CellProps) {
  return <div className={`cell step-${value}`}>{value > 0 && value}</div>;
}

export default Cell;
