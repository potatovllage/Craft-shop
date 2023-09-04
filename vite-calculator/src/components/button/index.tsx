import style from "./style.module.scss";
import bind from "../../style/cx";

interface ButtonProperties {
  size: "small" | "medium" | "large";
  backgroundColor: "gray" | "blue";
  expression: string;
  onClick: () => void;
}

const cx = bind(style);

function Button({
  expression,
  onClick,
  size,
  backgroundColor,
}: ButtonProperties) {
  return (
    <button
      className={cx(style.NumberButton, style[size], style[backgroundColor])}
      value={expression}
      onClick={() => onClick()}
    >
      {expression}
    </button>
  );
}

export default Button;
