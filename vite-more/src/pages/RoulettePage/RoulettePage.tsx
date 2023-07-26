import style from '../../styles/pages/RoulettePage.module.scss';
import bind from '../../styles/cx';
import Roulette from '../../components/Roulette/Roulette';

const cx = bind(style);

function RoulettePage() {
  return (
    <div className={cx(style.wrapper)}>
      <Roulette />
    </div>
  );
}

export default RoulettePage;
