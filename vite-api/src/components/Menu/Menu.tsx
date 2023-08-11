import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useSignOutUser } from "../../hooks/useAuthApi";
import { useDeleteAllToDo } from "../../hooks/useToDoListApi";

const cx = bind(style);

function Menu() {
  const { mutate: signOutUser } = useSignOutUser();
  const { mutate: deleteAllTodo } = useDeleteAllToDo();

  return (
    <div className={cx(style.menuWrapper)}>
      <div className={cx(style.menuContent)}>
        <p>Completed</p>
        <div className={cx(style.filterButton)} />
      </div>
      <div className={cx(style.menuContent)}>
        <p onClick={() => deleteAllTodo()} className={cx(style.deleteText)}>
          All To do Delete
        </p>
      </div>
      <div className={cx(style.menuContent)}>
        <p onClick={() => signOutUser()} className={cx(style.deleteText)}>
          Sign Out
        </p>
      </div>
    </div>
  );
}

export default Menu;
