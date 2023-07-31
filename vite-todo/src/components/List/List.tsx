import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';
import { useState } from 'react';

const cx = bind(style);

function List() {
  const [filterState, setFilterState] = useState<boolean>(false);
  const { todos, checkTodos } = useStore();

  const handleCheckTodo = (key: number) => {
    checkTodos(key);
  };

  const handleFilterButton = () => {
    setFilterState(!filterState);
  };

  return (
    <div className={cx(style.Wrapper)}>
      <div className={cx(style.filterContent)}>
        <p>필터</p>
        <div
          className={cx({ [style.filterButton]: filterState })}
          onClick={handleFilterButton}
        />
      </div>
      <div className={cx(style.List)}>
        {filterState
          ? todos
              .filter((item) => item.check === true)
              .map((item) => (
                <div
                  key={item.key}
                  className={cx(style.item, { [style.true]: item.check })}
                >
                  <div
                    className={cx(style.check)}
                    onClick={() => handleCheckTodo(item.key)}
                  >
                    <div className={cx(style.checkBox)} />
                  </div>
                  <p>{item.text}</p>
                </div>
              ))
          : todos.map((item) => (
              <div
                key={item.key}
                className={cx(style.item, { [style.true]: item.check })}
              >
                <div
                  className={cx(style.check)}
                  onClick={() => handleCheckTodo(item.key)}
                >
                  <div className={cx(style.checkBox)} />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default List;
