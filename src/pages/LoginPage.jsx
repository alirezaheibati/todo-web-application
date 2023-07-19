import LoginPageHeader from "../components/Header/LoginPageHeader";
import Register from "../components/Login/Register";
import Login from "../components/login/Login";
import classes from "./LoginPage.module.css";
const LoginPage = (props) => {
  return (
    <div className={classes["login-page_container"]}>
      <div className={classes["skew-bg"]}></div>
      <LoginPageHeader />

      {/* <Login /> */}
      <Register />
    </div>
  );
};
export default LoginPage;
