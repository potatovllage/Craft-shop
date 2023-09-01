import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

const calculation = ["÷", "x", "-", "+"];

function Calculation() {
  const { setOperand, getOperand, setAllClear } = useCalculator();

  const replace_oprand = getOperand.replace(/x/gi, "*").replace(/÷/gi, "/");

  const getResult = () => {
    if (Number.isNaN(eval(replace_oprand))) {
      setOperand("");
    } else if (eval(replace_oprand) == Number.POSITIVE_INFINITY) {
      alert("0으로 나눌수 없습니다.");
      setOperand("");
    } else {
      setAllClear();
      setOperand(eval(replace_oprand));
    }
  };

  return (
    <div className={cx(style.CalculationContainer)}>
      {calculation.map((item) => (
        <button
          key={item}
          onClick={() => setOperand(item)}
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
