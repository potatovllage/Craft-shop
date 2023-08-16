import style from "./style.module.scss";
import bind from "../../styles/cx";
import { useInputStore } from "../../store";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLogInUser, useSignUpUser } from "../../hooks/useAuthApi";

const cx = bind(style);

interface AuthClassifications {
  type: "login" | "signup";
}

function AuthForm({ type }: AuthClassifications) {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const inputs = useInputStore((state) => state.inputs);
  const setInput = useInputStore((state) => state.setInput);
  const navigate = useNavigate();
  const { mutate: logInUser } = useLogInUser();
  const { mutate: signUpUser } = useSignUpUser();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput(name, value);

    if (inputs.email === "" || inputs.password === "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  const handleLogInUser = () => {
    if (type === "login") {
      logInUser({ email: inputs.email, password: inputs.password });
      setInput("email", "");
      setInput("password", "");
      setButtonDisabled(true);
    } else {
      signUpUser({ email: inputs.email, password: inputs.password });
      setInput("email", "");
      setInput("password", "");
      setButtonDisabled(true);
    }
  };

  const handleNavigationPage = () => {
    if (type === "login") {
      navigate("/sign");
    } else {
      navigate("/");
    }
  };

  return (
    <div className={cx(style.AuthBox)}>
      <h1>{type === "login" ? "로그인" : "회원가입"}</h1>
      <div className={style.AuthInputWrapper}>
        <input
          name="email"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={inputs.email || ""}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={inputs.password || ""}
          onChange={handleInputChange}
        />
      </div>
      <button
        onClick={() => handleLogInUser()}
        disabled={buttonDisabled}
        className={cx(style.AuthSubmitButton)}
      >
        {type === "login" ? "로그인" : "회원가입"}
      </button>
      <div className={cx(style.NotAccountWrapper)}>
        <p>계정이 없다면</p>
        <strong onClick={handleNavigationPage}>
          {type === "login" ? "회원가입" : "로그인"}
        </strong>
      </div>
    </div>
  );
}

export default AuthForm;
