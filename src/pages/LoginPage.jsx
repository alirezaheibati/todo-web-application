import { useState } from "react";
import LoginPageHeader from "../components/Header/LoginPageHeader";
import Register from "../components/Login/Register";
import classes from "./LoginPage.module.css";
import LoginForm from "../components/Login/LoginForm";

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
        <LoginForm onChangeVisiblFrom={visibleFormHandler} />
      )}
      {visibleForm === "register" && (
        <Register onChangeVisiblFrom={visibleFormHandler} />
      )}
    </div>
  );
};
export default LoginPage;
