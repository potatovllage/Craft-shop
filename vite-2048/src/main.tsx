import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './components/board/Board';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
);
