import style from "./style.module.scss";
import bind from "../../style/cx";

const cx = bind(style);

function Input() {
  return <input type="number" className={cx(style.NumberSubmitInput)} />;
}

export default Input;
