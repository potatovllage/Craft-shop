import style from "../styles/pages/main.module.scss";
import bind from "../styles/cx";
import AddToDo from "../components/Add/AddToDo";
import Menu from "../components/Menu/Menu";
import List from "../components/List/List";

const cx = bind(style);

function MainPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <h1>오늘의 할 일</h1>
      <AddToDo />
      <Menu />
      <List />
    </div>
  );
}

export default MainPage;
