import "./Card.css";
import random from "../../assets/random.png";
import { CardComponentProps } from "../../types";
import { useGameStore } from "../../store/store";

function Card({ id, image, isOpen, onClick, index }: CardComponentProps) {
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
      style={
        isStart ? { animation: `cardMove ${index * 0.2}s ease-out` } : undefined
      }
    >
      <img
        className={`front card ${isOpen && "flipFront"}`}
        src={image}
        width={80}
        alt={String(id)}
      />
      <div className={`back card ${isOpen && "flipBack"}`}>
        <img src={random} width={80} alt="backImage" />
      </div>
    </div>
  );
}

export default Card;
