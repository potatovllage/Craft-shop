import { useGameStore } from "../../store/store";
import "./Card.css";

interface Card {
  id: number;
  image: string;
  isOpen: boolean;
  index: number;
}

function Card({ id, image, isOpen, index }: Card) {
  const { openCard } = useGameStore();

  return (
    <div className="CardWrapper" onClick={() => openCard(index)}>
      {isOpen ? (
        <img src={image} width={80} alt={String(id)} />
      ) : (
        <div className="NotFlipCard">?</div>
      )}
    </div>
  );
}

export default Card;
