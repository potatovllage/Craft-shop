import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function Shake() {
  return <h1 className={cx(style.ShakeText)}>흔들린다.</h1>;
}

export default Shake;
