import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function Numbers() {
  const {
    appendToExpression,
    setOprationCheck,
    expressionCheck,
    setExpressionCheck,
  } = useCalculator();

  const clickNumber = (char: string) => {
    appendToExpression(char);
    setOprationCheck(true);
    setExpressionCheck(true);
  };

  const clickZero = () => {
    if (expressionCheck) {
      appendToExpression("0");
      setOprationCheck(true);
      setExpressionCheck(true);
    }
  };

  return (
    <div className={cx(style.NumbersContainer)}>
      {number.map((item) => (
        <button
          key={item}
          value={item}
          onClick={() => clickNumber(String(item))}
          className={cx(style.NumberButton)}
        >
          {item}
        </button>
      ))}
      <button onClick={clickZero} className={cx(style.ZeroButton)}>
        0
      </button>
    </div>
  );
}

export default Numbers;
