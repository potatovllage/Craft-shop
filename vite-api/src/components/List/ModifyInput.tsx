import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useModifyToDo } from "../../hooks/useToDoListApi";

interface ModifyProps {
  itemId: number;
  completed: boolean;
  setIsInModifyMode: Dispatch<SetStateAction<boolean>>;
}

const cx = bind(style);

function ModifyInput({ itemId, setIsInModifyMode, completed }: ModifyProps) {
  const [modifyTodoItem, setModifyTodoItem] = useState<string>("");
  const { mutate: modifyToDo } = useModifyToDo();

  const handleChageModifyInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setModifyTodoItem(event.target.value);
  };

  const handleEnterModifyForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (modifyTodoItem === "") {
      alert("내용을 입력해주세요!");
    } else {
      setIsInModifyMode(false);
      modifyToDo({ id: itemId, content: modifyTodoItem, completed: completed });
    }
  };
  return (
    <form onSubmit={handleEnterModifyForm}>
      <input
        className={cx(style.submitModifyInput)}
        value={modifyTodoItem}
        onChange={handleChageModifyInput}
        type="text"
      />
    </form>
  );
}

export default ModifyInput;
