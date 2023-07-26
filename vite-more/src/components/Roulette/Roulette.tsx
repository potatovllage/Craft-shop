import style from './style.module.scss';
import bind from '../../styles/cx';
import { useEffect, useRef } from 'react';
import { useStore } from '../../store';

const cx = bind(style);

// https://gurtn.tistory.com/180 참고

function Roulette() {
  const ItemList = useStore((state) => state.Item);
  const canvasRef = useRef<any>(null);

  const colors = [
    '#dc0936',
    '#e6471d',
    '#f7a416',
    '#efe61f ',
    '#60b236',
    '#209b6c',
    '#169ed8',
    '#3f297e',
    '#87207b',
    '#be107f',
    '#e7167b',
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const newMake = () => {
      const [cw, ch] = [canvas?.width / 2, canvas.height / 2];
      const arc = Math.PI / (ItemList.length / 2);

      // 룰렛 배경 그리기
      for (let i = 0; i < ItemList.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i % (colors.length - 1)];
        ctx.moveTo(cw, ch);
        ctx.arc(cw, ch, cw, arc * (i - 1), arc * i);
        ctx.fill();
        ctx.closePath();
      }

      ctx.fillStyle = '#fff';
      ctx.font = '18px Pretendard';
      ctx.textAlign = 'center';

      // 그려진 배경 위에 텍스트 그리기
      for (let i = 0; i < ItemList.length; i++) {
        const angle = arc * i + arc / 2;

        ctx.save();

        ctx.translate(
          cw + Math.cos(angle) * (cw - 50),
          ch + Math.sin(angle) * (ch - 50)
        );
        ctx.rotate(angle + Math.PI / 2);

        // 항목명에 띄어쓰기가 있을 시 줄바꿈
        ItemList[i].text.split(' ').forEach((text, j) => {
          ctx.fillText(text, 0, 30 * j);
        });

        ctx.restore();
      }
    };

    newMake();
  }, []);

  const rotate = () => {
    const canvas = canvasRef.current;

    canvas.style.transform = `initial`;
    canvas.style.transition = `initial`;

    setTimeout(() => {
      const ran = Math.floor(Math.random() * ItemList.length);

      const arc = 360 / ItemList.length;
      const rotate = ran * arc + 3600 + arc * 3 - arc / 4;

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `2s`;

      setTimeout(() => alert(`결과는?! ${ItemList[ran].text} `), 2000);
      console.log(ItemList[ran]);
    }, 1);
  };

  return (
    <div className={cx(style.wrapper)}>
      <h1>돌려 돌려 돌림판</h1>
      <p>⬇️</p>
      <canvas ref={canvasRef} width={380} height={380} />
      <button onClick={rotate}>돌려라</button>
    </div>
  );
}

export default Roulette;
