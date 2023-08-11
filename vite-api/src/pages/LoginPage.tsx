import style from "../styles/pages/Auth.module.scss";
import bind from "../styles/cx";
import LoginInput from "../components/Login/Login";

const cx = bind(style);

function LoginPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <LoginInput />
    </div>
  );
}

export default LoginPage;
