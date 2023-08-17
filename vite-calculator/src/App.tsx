import Buttons from "./components/Number/index";
import Input from "./components/Input";
import style from "./style.module.scss";
import bind from "./style/cx";

const cx = bind(style);

function App() {
  return (
    <div className={cx(style.Wrapper)}>
      <Input />
      <Buttons />
    </div>
  );
}

export default App;
