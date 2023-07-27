import style from "./style.module.scss";
import bind from "../styles/cx";
import Audio from "../components/Audio/Audio";

const cx = bind(style);

function MainPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <Audio />
    </div>
  );
}

export default MainPage;
