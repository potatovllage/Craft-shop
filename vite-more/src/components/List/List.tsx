import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';

const cx = bind(style);

function List() {
  const { Item, setRemoveItem } = useStore();

  const handleRemoveTodo = (key: number) => {
    setRemoveItem(key);
    console.log('1');
  };

  return (
    <div className={cx(style.wrapper)}>
      {Item.map((item) => (
        <div key={item.key} className={cx(style.item)}>
          <p>{item.text}</p>
          <p onClick={() => handleRemoveTodo(item.key)} className={cx(style.x)}>
            x
          </p>
        </div>
      ))}
    </div>
  );
}

export default List;
