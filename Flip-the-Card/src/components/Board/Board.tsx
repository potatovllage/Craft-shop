import './board.css';

import { useEffect } from 'react';

import { finalCardArray } from '../../config';
import { useCheckClickedCard } from '../../hooks/useCheckClickedCard';
import { useGameStore } from '../../store/store';
import Card from '../Card/Card';

function Board() {
  const {
    settingGame,
    flipCount,
    clickedCards,
    isStart,
    setFlipCount,
    setClickedCard,
  } = useGameStore();

  const handleStartButton = () => {
    if (isStart) {
      alert('게임 진행중입니다!');
    } else {
      settingGame();
    }
  };

  const cardOpen = (id: number, imageUrl: string) => {
    if (clickedCards.length < 2) {
      if (isStart) {
        finalCardArray.map((value) => {
          if (value.id === id) {
            value.isOpen = !value.isOpen;
            setFlipCount();
            return true;
          } else {
            return false;
          }
        });
        setClickedCard(imageUrl);
      } else {
        alert('Start를 눌러주세요!');
      }
    }
  };

  useCheckClickedCard();

  useEffect(() => {
    if (flipCount === 0) {
      alert('GAME OVER');
    } else if (finalCardArray.every((card) => card.isOpen === true)) {
      alert('GAME WIN');
    }
  }, [flipCount]);

  return (
    <div className="Wrapper">
      <div className="GameInformation">
        <button onClick={handleStartButton}>START</button>
        <button onClick={() => location.reload()}>AGAIN</button>
        <h2>Count: {flipCount}</h2>
      </div>
      <div className="GameContainer">
        {finalCardArray.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            index={index}
            image={card.image}
            isOpen={card.isOpen}
            onClick={() => cardOpen(card.id, card.image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
