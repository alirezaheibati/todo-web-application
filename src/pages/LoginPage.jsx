import LoginPageHeader from "../components/Header/LoginPageHeader";
import Login from "../components/login/Login";
import classes from "./LoginPage.module.css";
const LoginPage = (props) => {
  return (
    <div className={classes["login-page_container"]}>
      <LoginPageHeader />

      <Login />
    </div>
  );
};
export default LoginPage;
