import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function Numbers() {
  const { appendToExpression } = useCalculator();

  return (
    <div className={cx(style.NumbersContainer)}>
      {number.map((item) => (
        <button
          key={item}
          value={item}
          onClick={() => appendToExpression(String(item))}
          className={cx(style.NumberButton)}
        >
          {item}
        </button>
      ))}
      <button
        onClick={() => appendToExpression("0")}
        className={cx(style.ZeroButton)}
      >
        0
      </button>
    </div>
  );
}

export default Numbers;
