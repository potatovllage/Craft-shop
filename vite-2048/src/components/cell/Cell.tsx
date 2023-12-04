import './cell.scss';

import type { CellProps } from '../../types';

function Cell({ value, x, y }: CellProps) {
  return (
    <div
      className={`cell step-${value}`}
      style={{
        top: `${(107 + 15) * y}px`,
        left: `${(107 + 15) * x}px`,
      }}
    >
      {value > 0 && value}
    </div>
  );
}

export default Cell;
