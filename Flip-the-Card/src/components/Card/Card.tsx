import "./Card.css";
import { MouseEventHandler } from "react";

interface CardProps {
  id: number;
  image: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

function Card({ id, image, isOpen, onClick }: CardProps) {
  return (
    <div className="CardWrapper" onClick={onClick}>
      {isOpen ? (
        <img src={image} width={80} alt={String(id)} />
      ) : (
        <div className="NotFlipCard">?</div>
      )}
    </div>
  );
}

export default Card;
