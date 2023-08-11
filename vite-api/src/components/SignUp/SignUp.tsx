import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useInputStore } from "../../store";
import { useState } from "react";
import { useSignUpUser } from "../../hooks/useAuthApi";
import { useNavigate } from "react-router-dom";

const cx = bind(style);

function SignUp() {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const inputs = useInputStore((state) => state.inputs);
  const setInput = useInputStore((state) => state.setInput);
  const navigate = useNavigate();
  const { mutate: signUpUser } = useSignUpUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(name, value);

    if (inputs.email === "" || inputs.password === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  const handleSignUpUser = () => {
    signUpUser({ email: inputs.email, password: inputs.password });
    setInput("email", "");
    setInput("password", "");
    setButtonDisabled(true);
  };

  return (
    <div className={cx(style.SignBox)}>
      <h1>SignUp</h1>
      <div className={style.SignInputWrapper}>
        <input
          name="email"
          type="text"
          placeholder="email을 입력해주세요"
          className={cx(style.SignInput)}
          value={inputs.email || ""}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password를 입력해주세요"
          className={cx(style.SignInput)}
          value={inputs.password || ""}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={() => handleSignUpUser()}
        disabled={buttonDisabled}
        className={cx(style.SignButton)}
      >
        SignUp
      </button>
      <div className={cx(style.NotAccountWrapper)}>
        <p>계정이 있다면</p>
        <strong onClick={() => navigate("/")}>로그인</strong>
      </div>
    </div>
  );
}

export default SignUp;
