import style from "../styles/pages/Auth.module.scss";
import bind from "../styles/cx";
import SignUp from "../components/SignUp/SignUp";

const cx = bind(style);

function SignUpPage() {
  return (
    <div className={cx(style.Wrapper)}>
      <SignUp />
    </div>
  );
}

export default SignUpPage;
