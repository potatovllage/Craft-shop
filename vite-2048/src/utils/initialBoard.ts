import type { CellProps } from '../types';

export function initialBoard(): CellProps[][] {
  return Array.from(new Array(4), () => {
    return new Array(4).fill(0).map(() => {
      return {
        value: 0,
      };
    });
  });
}
