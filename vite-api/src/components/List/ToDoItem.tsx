import style from "./style.module.scss";
import bind from "../../styles/cx";
import type { ToDoListItem } from "../../types/ToDo";
import React, { useState } from "react";
import ModifyInput from "./ModifyInput";
import DropDown from "../DropDown/DropDown";
import { useDeleteToDo, useModifyToDo } from "../../hooks/useToDoListApi";

const cx = bind(style);

function ToDoItem({ completed, content, id }: ToDoListItem) {
  const [isInModifyMode, setIsInModifyMode] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const { mutate: deleteToDo } = useDeleteToDo();
  const { mutate: modifyToDo } = useModifyToDo();

  const handleCheckBoxClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isInModifyMode === true) {
      event.preventDefault();
    } else {
      modifyToDo({ id: id, completed: !completed, content: content });
    }
  };

  return (
    <div className={cx(style.item)}>
      <div className={cx(style.itemContent)}>
        <button
          onClick={handleCheckBoxClick}
          className={cx(style.check, { [style.done]: completed })}
        >
          <div className={cx(style.checkBox)} />
        </button>
        {isInModifyMode && selectedItemId === id ? (
          <ModifyInput
            itemId={selectedItemId}
            completed={completed}
            setIsInModifyMode={setIsInModifyMode}
          />
        ) : (
          <p>{content}</p>
        )}
      </div>
      <DropDown
        onMenuClick={() => setSelectedItemId(id)}
        onDeleteTodoItem={() => deleteToDo(id)}
        setIsInModifyMode={setIsInModifyMode}
      />
    </div>
  );
}

export default ToDoItem;
