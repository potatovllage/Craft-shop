import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

const calculation = ["÷", "x", "-", "+"];

function Calculation() {
  const {
    appendToExpression,
    expression,
    clearAll,
    setOprationCheck,
    oprationCheck,
  } = useCalculator();

  const replace_oprand = expression.replace(/x/gi, "*").replace(/÷/gi, "/");

  const getOper = (oprand: string) => {
    if (oprationCheck) {
      appendToExpression(oprand);
      setOprationCheck(false);
    }
  };

  const getResult = () => {
    if (Number.isSafeInteger(eval(replace_oprand))) {
      if (Number.isNaN(eval(replace_oprand))) {
        appendToExpression("");
      } else if (eval(replace_oprand) == Number.POSITIVE_INFINITY) {
        alert("0으로 나눌수 없습니다.");
        appendToExpression("");
      } else {
        clearAll();
        appendToExpression(eval(replace_oprand));
      }
    } else {
      alert("숫자가 너무 큽니다.");
      clearAll();
    }
  };

  return (
    <div className={cx(style.CalculationContainer)}>
      {calculation.map((item) => (
        <button
          key={item}
          onClick={() => getOper(item)}
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
