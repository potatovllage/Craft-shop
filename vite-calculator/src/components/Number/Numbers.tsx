import style from "./style.module.scss";
import bind from "../../style/cx";
import { useCalculator } from "../../store";
import Button from "../button";

const cx = bind(style);

const number = [7, 8, 9, 4, 5, 6, 1, 2, 3];

function Numbers() {
  const {
    appendToExpression,
    setOprationCheck,
    expressionCheck,
    setExpressionCheck,
  } = useCalculator();

  const clickNumber = (char: string) => {
    appendToExpression(char);
    setOprationCheck(true);
    setExpressionCheck(true);
  };

  const clickZero = () => {
    if (expressionCheck) {
      appendToExpression("0");
      setOprationCheck(true);
      setExpressionCheck(true);
    }
  };

  return (
    <div className={cx(style.NumbersContainer)}>
      {number.map((item) => (
        <Button
          key={item}
          size={"small"}
          expression={String(item)}
          backgroundColor="gray"
          onClick={() => clickNumber(String(item))}
        />
      ))}
      <Button
        size="large"
        expression="0"
        backgroundColor="gray"
        onClick={clickZero}
      />
    </div>
  );
}

export default Numbers;
