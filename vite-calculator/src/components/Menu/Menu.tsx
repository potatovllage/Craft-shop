import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";
import Button from "../button";

const cx = bind(style);

function Menu() {
  const { deleteLostCharacter, clearAll } = useCalculator();

  return (
    <div className={cx(style.MenuContent)}>
      <Button
        backgroundColor="gray"
        expression="AC"
        onClick={clearAll}
        size="small"
      />
      <Button
        backgroundColor="gray"
        expression="Del"
        onClick={deleteLostCharacter}
        size="medium"
      />
    </div>
  );
}

export default Menu;
