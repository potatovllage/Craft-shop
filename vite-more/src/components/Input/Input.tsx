import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';
import { useBtnStore } from '../../store/useBtnStore';
import React, { useState, useEffect } from 'react';

const cx = bind(style);

function Input() {
  const [item, setItem] = useState<string>('');
  const Create = useStore((state) => state.setCreateItem);
  const itemList = useStore((state) => state.Item);
  const setBtnState = useBtnStore((state) => state.setBtnState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const onEnterForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (item === '') {
      alert('요소를 입력해주세요!');
      e.preventDefault();
    } else if (itemList.length > 7) {
      alert('요소는 8개까지만 입력 가능합니다.');
      e.preventDefault();
      setItem('');
    } else {
      e.preventDefault();
      Create(item);
      setItem('');
    }
  };

  useEffect(() => {
    if (itemList.length > 7) {
      setBtnState();
    }
  }, [itemList]);

  return (
    <form onSubmit={onEnterForm} className={cx(style.submitInput)}>
      <input
        value={item}
        onChange={onChangeInput}
        type="text"
        placeholder="오늘의 To Do를 입력해주세요!"
      />
    </form>
  );
}

export default Input;
