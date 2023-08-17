import style from "./style.module.scss";
import bind from "../../style/cx";

const cx = bind(style);

const calculationArr = ["÷", "x", "-", "+", "="];

function Calculation() {
  return (
    <div className={cx(style.CalculationContainer)}>
      {calculationArr.map((item) => (
        <button key={item} className={cx(style.CalculationButton)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Calculation;
