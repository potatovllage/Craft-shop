import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

const numberArr = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function Numbers() {
  const { setOperand } = useCalculator();

  return (
    <div className={cx(style.NumbersContainer)}>
      {numberArr.map((item) => (
        <button
          key={item}
          value={item}
          onClick={() => setOperand(String(item))}
          className={cx(style.NumberButton)}
        >
          {item}
        </button>
      ))}
      <button onClick={() => setOperand("0")} className={cx(style.ZeroButton)}>
        0
      </button>
    </div>
  );
}

export default Numbers;
