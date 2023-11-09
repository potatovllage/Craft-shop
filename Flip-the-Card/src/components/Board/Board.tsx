import { useGameStore } from "../../store/store";
import Card from "../Card/Card";
import "./board.css";

function Board() {
  const { board, settingGame, flipCount, openCard, clickedCards } =
    useGameStore();

  const handleStartButton = () => {
    settingGame();
  };

  const handleCardClick = (id: number, ImageUrl: string) => {
    openCard(id, ImageUrl);
  };

  return (
    <div className="Wrapper">
      <div className="GameInformation">
        <button onClick={handleStartButton}>START</button>
        <button onClick={() => location.reload()}>AGAIN</button>
        <h2>Count: {flipCount}</h2>
      </div>
      <div className="GameContainer">
        {board.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            index={index}
            image={card.image}
            isOpen={card.isOpen}
            onClick={
              clickedCards.length < 2
                ? () => handleCardClick(card.id, card.image)
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
