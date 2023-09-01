import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

function Menu() {
  const { deleteLostCharacter, clearAll } = useCalculator();

  return (
    <div className={cx(style.MenuContent)}>
      <button onClick={() => clearAll()} className={cx(style.NumberButton)}>
        AC
      </button>
      <button
        onClick={() => deleteLostCharacter()}
        className={cx(style.DeleteButton)}
      >
        Del
      </button>
    </div>
  );
}

export default Menu;
