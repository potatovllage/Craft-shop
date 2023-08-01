import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function TopBottom() {
  return (
    <div>
      <h1 className={cx(style.TopBottom)}>위로 갔다가 아래로</h1>
    </div>
  );
}

export default TopBottom;
