import classes from "./Register.module.css";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../FrequentlyUsed/Input";
const Register = () => {
  return (
    <div className={classes["register_form_container"]}>
      <h2>Get Started</h2>
      <small>Create your account now.</small>
      <form className={classes["register_form_from"]}>
        <Input
          icon={faUser}
          type="text"
          id="register-form_username"
          placeholder="username"
        />
        <Input
          icon={faEnvelope}
          type="mail"
          id="register-form_mail"
          placeholder="you@example.com"
        />
        <Input
          icon={faLock}
          type="password"
          id="register-form_password"
          placeholder="At least 8 characters"
        />
        <div className={classes["register_form_checkrules"]}>
          <input type="checkbox" id="register-form_rules" />
          <label htmlFor="register-form_rules"> I agree to all Terms.</label>
        </div>
        <button type="submit" className={classes["register_form_btn"]}>
          Login
        </button>
      </form>
      <p className={classes["register-form_signup"]}>
        Have an account? <span> Login</span>
      </p>
    </div>
  );
};
export default Register;
