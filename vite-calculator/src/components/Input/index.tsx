import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";

const cx = bind(style);

function Input() {
  const { expression } = useCalculator();

  return (
    <input
      defaultValue={expression}
      disabled
      className={cx(style.NumberSubmitInput)}
    />
  );
}

export default Input;
