import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

const calculation = ["÷", "x", "-", "+"];

function Calculation() {
  const { appendToExpression, expression, clearAll } = useCalculator();

  const replace_oprand = expression.replace(/x/gi, "*").replace(/÷/gi, "/");

  const getResult = () => {
    if (Number.isNaN(eval(replace_oprand))) {
      appendToExpression("");
    } else if (eval(replace_oprand) == Number.POSITIVE_INFINITY) {
      alert("0으로 나눌수 없습니다.");
      appendToExpression("");
    } else {
      clearAll();
      appendToExpression(eval(replace_oprand));
    }
  };

  return (
    <div className={cx(style.CalculationContainer)}>
      {calculation.map((item) => (
        <button
          key={item}
          onClick={() => appendToExpression(item)}
          className={cx(style.CalculationButton)}
        >
          {item}
        </button>
      ))}
      <button onClick={getResult} className={cx(style.CalculationButton)}>
        =
      </button>
    </div>
  );
}

export default Calculation;
