import "./Square.css";

interface Props {
  value: string;
  onClick: () => void;
}

function Square({ value, onClick }: Props) {
  return (
    <div className="Square" onClick={onClick}>
      <p className={value === "O" ? "o" : "x"}>{value}</p>
    </div>
  );
}

export default Square;
