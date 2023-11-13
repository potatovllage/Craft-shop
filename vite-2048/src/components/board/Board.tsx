import './board.css';

import { gridKeysArray } from '../../config';
import Cell from '../cell/Cell';

function Board() {
  return (
    <div className="Wrapper">
      <h1 id="title">2048</h1>
      <div className="header">
        <div className="scoreBoardContainer">
          <div className="score">
            <p>SCORE</p>
            <p>0</p>
          </div>
          <div className="score">
            <p>BEST</p>
            <p>0</p>
          </div>
        </div>
        <button>NewGame</button>
      </div>
      <div
        className="boardContainer"
        style={{
          gridTemplateColumns: `repeat(${4}, 1fr)`,
        }}
      >
        {gridKeysArray.map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
}

export default Board;
