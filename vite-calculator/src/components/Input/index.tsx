import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

function Input() {
  const { getOperand } = useCalculator();

  return (
    <input defaultValue={getOperand} className={cx(style.NumberSubmitInput)} />
  );
}

export default Input;
