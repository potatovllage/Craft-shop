import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

function Menu() {
  const { setDeleteOperand, setAllClear } = useCalculator();

  return (
    <div className={cx(style.MenuContent)}>
      <button onClick={() => setAllClear()} className={cx(style.NumberButton)}>
        AC
      </button>
      <button
        onClick={() => setDeleteOperand()}
        className={cx(style.DeleteButton)}
      >
        Del
      </button>
    </div>
  );
}

export default Menu;
