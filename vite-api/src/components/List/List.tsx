import style from "./style.module.scss";
import bind from "../../styles/cx";
import ToDoItem from "./ToDoItem";
import { useToDoListGet } from "../../hooks/useToDoListApi";
import { useUserInfo } from "../../hooks/useAuthApi";

const cx = bind(style);

function List() {
  const { data: list } = useToDoListGet();

  useUserInfo();

  return (
    <div className={cx(style.List)}>
      {list?.map((item) => (
        <ToDoItem
          completed={item.completed}
          content={item.content}
          id={item.id}
          created_at={item.created_at}
          updated_at={item.updated_at}
          user_id={item.user_id}
        />
      ))}
    </div>
  );
}

export default List;
