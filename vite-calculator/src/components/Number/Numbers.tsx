import style from "./style.module.scss";
import bind from "../../style/cx";

const cx = bind(style);

const numberArr = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function Numbers() {
  return (
    <div className={cx(style.NumbersContainer)}>
      {numberArr.map((item) => (
        <button value={item} className={cx(style.NumberButton)}>
          {item}
        </button>
      ))}
      <button className={cx(style.ZeroButton)}>0</button>
    </div>
  );
}

export default Numbers;
