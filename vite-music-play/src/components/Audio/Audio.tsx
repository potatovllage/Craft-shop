import { useRef, useState } from "react";
import style from "./style.module.scss";
import bind from "../../styles/cx";
import music from "../../assets/a.mp3";

const cx = bind(style);

function Audio() {
  const [musicState, setMusicState] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const onClickBtn = () => {
    setMusicState(!musicState);
    console.log(musicState, "1");
    if (musicState === false) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  return (
    <div className={cx(style.Wrapper)}>
      <audio
        ref={audioRef}
        src={music}
        autoPlay={true}
        style={{ display: "none" }}
      />
      <h1>Music Player</h1>
      <p>부제: 마음에 안듬</p>
      <button onClick={onClickBtn}>{musicState ? "⏸" : "▶️"}</button>
    </div>
  );
}

export default Audio;
