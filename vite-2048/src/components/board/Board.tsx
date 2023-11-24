import './board.css';

import { useKeyBoard } from '../../hooks/useKeyboard';
import { useGameStore } from '../../store/store';
import Cell from '../cell/Cell';

function Board() {
  const { score, settingGame, board } = useGameStore();

  console.log(board);

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
      <div
        className="boardContainer"
        style={{
          gridTemplateColumns: `repeat(${4}, 1fr)`,
        }}
      >
        {board.map((row, x) =>
          row.map(({ value }, y) => <Cell key={x + y} value={value} />),
        )}
      </div>
    </div>
  );
}

export default Board;
