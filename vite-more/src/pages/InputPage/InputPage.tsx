import style from '../../styles/pages/InputPage.module.scss';
import bind from '../../styles/cx';
import Input from '../../components/Input/Input';
import List from '../../components/List/List';
import { useNavigate } from 'react-router-dom';

import { useBtnStore } from '../../store/useBtnStore';

const cx = bind(style);

function InputPage() {
  const btnState = useBtnStore((state) => state.state);
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate('/roulette');
  };

  return (
    <div className={cx(style.Wrapper)}>
      <h1>Roulette</h1>
      <Input />
      <List />
      <button disabled={btnState} onClick={onClickBtn}>
        시작하기
      </button>
    </div>
  );
}

export default InputPage;
