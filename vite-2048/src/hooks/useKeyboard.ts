import { useEffect } from 'react';

import { useGameStore } from '../store/store';
import { gameWinningStatus } from '../utils/gameWinningStatus';

export const useKeyBoard = () => {
  const { board, moveCells, setScoreCount } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp': {
          moveCells('up');
          gameWinningStatus(board);
          setScoreCount();
          break;
        }
        case 'ArrowDown': {
          moveCells('down');
          gameWinningStatus(board);
          setScoreCount();
          break;
        }
        case 'ArrowLeft': {
          moveCells('left');
          gameWinningStatus(board);
          setScoreCount();
          break;
        }
        case 'ArrowRight': {
          moveCells('right');
          gameWinningStatus(board);
          setScoreCount();
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
