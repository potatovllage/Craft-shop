import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useInputStore } from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogInUser } from "../../hooks/useAuthApi";

const cx = bind(style);

function Login() {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const inputs = useInputStore((state) => state.inputs);
  const setInput = useInputStore((state) => state.setInput);
  const navigate = useNavigate();
  const { mutate: logInUser } = useLogInUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(name, value);

    if (inputs.email === "" || inputs.password === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  const handleLogInUser = () => {
    logInUser({ email: inputs.email, password: inputs.password });
    setInput("email", "");
    setInput("password", "");
    setButtonDisabled(true);
  };

  return (
    <div className={cx(style.LoginBox)}>
      <h1>LOGIN</h1>
      <div className={style.LoginInputWrapper}>
        <input
          name="email"
          type="text"
          placeholder="email을 입력해주세요"
          className={cx(style.LoginInput)}
          value={inputs.email || ""}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password를 입력해주세요"
          className={cx(style.LoginInput)}
          value={inputs.password || ""}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={() => handleLogInUser()}
        disabled={buttonDisabled}
        className={cx(style.LoginButton)}
      >
        LOGIN
      </button>
      <div className={cx(style.NotAccountWrapper)}>
        <p>계정이 없다면</p>
        <strong onClick={() => navigate("/sign")}>회원가입</strong>
      </div>
    </div>
  );
}

export default Login;
