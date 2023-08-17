import style from "./style.module.scss";
import bind from "../../style/cx";

const cx = bind(style);

function Menu() {
  return (
    <div className={cx(style.MenuContent)}>
      <button className={cx(style.NumberButton)}>AC</button>
      <button className={cx(style.DeleteButton)}>Del</button>
    </div>
  );
}

export default Menu;
