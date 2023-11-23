import { useEffect } from 'react';

import { useGameStore } from '../store/store';

export const useKeyBoard = () => {
  const { board, moveCells } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp': {
          moveCells('up');
          break;
        }
        case 'ArrowDown': {
          moveCells('down');
          break;
        }
        case 'ArrowLeft': {
          moveCells('left');
          break;
        }
        case 'ArrowRight': {
          moveCells('right');
          break;
        }
        default: {
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [board, moveCells]);
};
