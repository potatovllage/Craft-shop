import { useEffect } from 'react';

import { useGameStore } from '../store/store';
import type { DirectionKey } from '../types';
import { checkGameStatus } from '../utils/checkGameStatus';

export const useKeyBoard = () => {
  const { board, moveCells, setScoreCount } = useGameStore();

  useEffect(() => {
    function moveAndCheckGame(direction: DirectionKey) {
      moveCells(direction);
      checkGameStatus(board);
      setScoreCount();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp': {
          moveAndCheckGame('up');
          break;
        }
        case 'ArrowDown': {
          moveAndCheckGame('down');
          break;
        }
        case 'ArrowLeft': {
          moveAndCheckGame('left');
          break;
        }
        case 'ArrowRight': {
          moveAndCheckGame('right');
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
  }, [board, moveCells, setScoreCount]);
};
