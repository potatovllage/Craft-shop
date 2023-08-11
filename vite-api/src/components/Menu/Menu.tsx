import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useSignOutUser } from "../../hooks/useAuthApi";
import { useDeleteAllToDo } from "../../hooks/useToDoListApi";
import { useFilterStore } from "../../store";

const cx = bind(style);

function Menu() {
  const { toggleFilter, selectToggleFilter } = useFilterStore();

  const { mutate: signOutUser } = useSignOutUser();
  const { mutate: deleteAllTodo } = useDeleteAllToDo();

  return (
    <div className={cx(style.menuWrapper)}>
      <div className={cx(style.menuContent)}>
        <p>확인</p>
        <button
          className={cx(style.check, { [style.done]: toggleFilter })}
          onClick={() => selectToggleFilter()}
        >
          <div className={cx(style.checkBox)} />
        </button>
      </div>
      <div className={cx(style.menuContent)}>
        <button
          onClick={() => deleteAllTodo()}
          className={cx(style.deleteButton)}
        >
          오늘 할 일 전체 삭제
        </button>
      </div>
      <div className={cx(style.menuContent)}>
        <button
          onClick={() => signOutUser()}
          className={cx(style.deleteButton)}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default Menu;
