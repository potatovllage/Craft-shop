import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function KeyframeTest() {
  return (
    <div className={cx(style.Wrapper)}>
      <div />
    </div>
  );
}

export default KeyframeTest;
