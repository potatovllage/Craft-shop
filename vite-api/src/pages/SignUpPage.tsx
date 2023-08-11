import style from "../styles/pages/Auth.module.scss";
import bind from "../styles/cx";
import AuthForm from "../components/Auth/AuthForm";

const cx = bind(style);

function SignUpPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <AuthForm type="SIGNUP" />
    </div>
  );
}

export default SignUpPage;
