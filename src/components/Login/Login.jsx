import classes from "./Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <div className={classes["login_form_container"]}>
      <h2>Welcome back!</h2>
      <small>start manageing your tasks faster and better.</small>
      <form className={classes["login_form_from"]}>
        <div className={classes["login_form_actions"]}>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            type="text"
            id="login-form_username"
            placeholder="you@example.com"
          />
        </div>
        <div className={classes["login_form_actions"]}>
          <div>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            type="password"
            id="login-form_password"
            placeholder="At least 8 characters"
          />
        </div>
        <p>Forget Password?</p>
        <button type="submit" className={classes["login_form_btn"]}>
          Login
        </button>
      </form>
      <p className={classes["login-form_signup"]}>
        Don't you have an account? <span> Sign Up</span>
      </p>
    </div>
  );
};
export default Login;
