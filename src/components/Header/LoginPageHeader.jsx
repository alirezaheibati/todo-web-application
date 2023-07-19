import classes from "./LoginPageHeader.module.css";
const LoginPageHeader = (props) => {
  return (
    <div className={classes["login-page_header"]}>
      <h2>TaskMask Manager</h2>
      <div>
        <button className={classes["header-login_btn"]}>Login</button>
        <button className={classes["header-register_btn"]}>Register</button>
      </div>
    </div>
  );
};
export default LoginPageHeader;
