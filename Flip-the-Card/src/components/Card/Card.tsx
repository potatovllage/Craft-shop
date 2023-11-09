import "./Card.css";
import { random } from "../../assets/index";

interface CardProps {
  id: number;
  image: string;
  isOpen: boolean;
  onClick?: () => void;
}

function Card({ id, image, isOpen, onClick }: CardProps) {
  const handleClick = () => {
    if (!isOpen && onClick) {
      onClick();
    }
  };

  return (
    <div className="CardWrapper" onClick={handleClick}>
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
