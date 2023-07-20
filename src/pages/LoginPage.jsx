import { useState } from "react";
import LoginPageHeader from "../components/Header/LoginPageHeader";
import Register from "../components/Login/Register";
import Login from "../components/login/Login";
import classes from "./LoginPage.module.css";
const LoginPage = (props) => {
  const [visibleForm, setVisibleForm] = useState("login");
  const visibleFormHandler = (formName) => {
    setVisibleForm(formName);
  };
  return (
    <div className={classes["login-page_container"]}>
      <div className={classes["skew-bg"]}></div>
      <LoginPageHeader
        activeForm={visibleForm}
        onChangeVisiblFrom={visibleFormHandler}
      />

      {visibleForm === "login" && (
        <Login onChangeVisiblFrom={visibleFormHandler} />
      )}
      {visibleForm === "register" && (
        <Register onChangeVisiblFrom={visibleFormHandler} />
      )}
    </div>
  );
};
export default LoginPage;
