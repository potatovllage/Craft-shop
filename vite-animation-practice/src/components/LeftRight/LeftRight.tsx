import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function LeftRight() {
  return <h1 className={cx(style.LeftRigh)}>왼쪽 갔다 오른쪽</h1>;
}

export default LeftRight;
