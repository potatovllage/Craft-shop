import style from "./style.module.scss";
import bind from "../../style/cx";
import Numbers from "./Numbers";
import Menu from "./Menu";
import Calculation from "./Calculation";

const cx = bind(style);

function Buttons() {
  return (
    <div className={cx(style.ButtonContainer)}>
      <div className={cx(style.MenuNumberContainer)}>
        <Menu />
        <Numbers />
      </div>
      <Calculation />
    </div>
  );
}

export default Buttons;
