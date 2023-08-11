import style from "./style.module.scss";
import bind from "../../styles/cx";
import ToDoItem from "./ToDoItem";
import { useToDoListGet } from "../../hooks/useToDoListApi";
import { useFilterStore } from "../../store";

const cx = bind(style);

function List() {
  const { toggleFilter } = useFilterStore();
  const { data: list } = useToDoListGet();

  const toggleFilterTodos = toggleFilter
    ? list?.filter((item) => item.completed === true)
    : list;

  return (
    <div className={cx(style.List)}>
      {toggleFilterTodos?.map((item) => (
        <ToDoItem
          key={item.id}
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
