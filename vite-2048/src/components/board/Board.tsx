import './board.css';

import { useKeyBoard } from '../../hooks/useKeyboard';
import { useGameStore } from '../../store/store';
import Cell from '../cell/Cell';

function Board() {
  const { score, settingGame, board } = useGameStore();

  useKeyBoard();

  return (
    <div className="Wrapper">
      <h1 id="title">2048</h1>
      <div className="header">
        <div className="scoreBoardContainer">
          <div className="score">
            <p>SCORE</p>
            <p>{score}</p>
          </div>
        </div>
        <button onClick={settingGame}>NewGame</button>
      </div>
      <div className="boardContainer">
        {new Array(4 * 4).fill(0).map((_, index) => (
          <div className="backgroundTile" key={index} />
        ))}
        {board.map((row, y) =>
          row.map(({ value }, x) => (
            <Cell key={`${x}${y}`} value={value} x={x} y={y} />
          )),
        )}
      </div>
    </div>
  );
}

export default Board;
