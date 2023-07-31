import style from "./style.module.scss";
import bind from "../../styles/cx";

const cx = bind(style);

function LoadingBar() {
  return (
    <div className={cx(style.Wrapper)}>
      <div className={cx(style.loading_spinne_boxs)}>
        <div className={cx(style.loading_spinner)} />
      </div>
    </div>
  );
}

export default LoadingBar;
