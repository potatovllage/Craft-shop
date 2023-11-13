import './Card.css';

import random from '../../assets/random.png';
import { useGameStore } from '../../store/store';
import type { CardComponentProps } from '../../types';

function Card({ id, image, isOpen, onClick }: CardComponentProps) {
  const { isStart } = useGameStore();

  const handleClick = () => {
    if (!isOpen && onClick) {
      onClick();
    }
  };

  return (
    <div
      className="CardWrapper"
      onClick={handleClick}
      style={isStart ? { animation: 'cardMove 1s ease-out' } : undefined}
    >
      <img
        className={`front card ${isOpen && 'flipFront'}`}
        src={image}
        width={80}
        alt={String(id)}
      />
      <div className={`back card ${isOpen && 'flipBack'}`}>
        <img src={random} width={80} alt="backImage" />
      </div>
    </div>
  );
}

export default Card;
