import { useGameStore } from "../../store/store";
import Card from "../Card/Card";
import "./board.css";

function Board() {
  const { board, settingGame, flipCount } = useGameStore();

  const handleStartButton = () => {
    settingGame();
  };

  return (
    <div className="Wrapper">
      <div className="GameInformation">
        <button onClick={handleStartButton}>START</button>
        <h2>Count: {flipCount}</h2>
      </div>
      <div className="GameContainer">
        {board.map((card, index) => (
          <Card
            key={index}
            index={index}
            id={card.id}
            image={card.image}
            isOpen={card.isOpen}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
