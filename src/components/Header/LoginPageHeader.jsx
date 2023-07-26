import classes from "./LoginPageHeader.module.css";
const LoginPageHeader = (props) => {
  const formChangeHandler = (e) => {
    props.onChangeVisiblFrom(e.target.getAttribute("data-from-type"));
  };
  return (
    <div className={classes["login-page_header"]}>
      <h2>TaskMate Manager</h2>
      <div>
        <button
          onClick={formChangeHandler}
          data-from-type="login"
          className={`${classes["header-login_btn"]} ${
            props.activeForm === "login" ? classes["header-active-btn"] : ""
          }`}
        >
          Login
        </button>
        <button
          onClick={formChangeHandler}
          data-from-type="register"
          className={`${classes["header-register_btn"]} ${
            props.activeForm === "register" ? classes["header-active-btn"] : ""
          }`}
        >
          Register
        </button>
      </div>
    </div>
  );
};
export default LoginPageHeader;
