import { useRef, useState } from "react";
import classes from "./LoginForm.module.css";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import Input from "../FrequentlyUsed/Input";
import LoadingSpinner from "../FrequentlyUsed/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import Modal from "../FrequentlyUsed/Modal";
import { useDispatch } from "react-redux";
import { userInfoSliceActions } from "../../store";
import { useNavigate } from "react-router-dom";
const LoginForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { error, isLoading, sendRequest } = useHttp();
  const [modalVisibility, setModalVisibility] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalCloseHandler = () => {
    setModalVisibility(false);
  };
  const loginUserDataHandler = (result) => {
    console.log(result);
    localStorage.setItem("userId", result.objectId);
    localStorage.setItem("email", result.email);
    localStorage.setItem("username", result.username);
    localStorage.setItem("sessionToken", result.sessionToken);
    navigate("/homepage");
  };

  const userLoginHandler = (e) => {
    e.preventDefault();
    setModalVisibility(true);
    if (
      emailInputRef.current.value.trim().length > 0 &&
      passwordInputRef.current.value.trim().length > 0
    ) {
      sendRequest(
        {
          url: `https://parseapi.back4app.com/login?username=${emailInputRef.current.value}&password=${passwordInputRef.current.value}`,

          headers: {
            "X-Parse-Application-Id":
              "VUBEmOkNcXSUnYBMnOj68tnzu1jnkopyO6Ow2OGb",

            "X-Parse-REST-API-Key": " NbyD4dNV7pNxrzzCRXQXLUd6cb8C2776i53CBSgW",

            "X-Parse-Revocable-Session": 1,

            "Content-Type": "application/json",
          },
        },
        loginUserDataHandler
      );
    }
  };

  const formChangeHandler = () => {
    props.onChangeVisiblFrom("register");
  };
  return (
    <div className={classes["login_form_container"]}>
      {isLoading && <LoadingSpinner />}
      {modalVisibility && error && (
        <Modal title="Error" description={error} onClick={modalCloseHandler} />
      )}
      <h2>Welcome back!</h2>
      <small>start manageing your tasks faster and better.</small>
      <form className={classes["login_form_from"]} onSubmit={userLoginHandler}>
        <Input
          icon={faEnvelope}
          type="mail"
          id="login-form_username"
          placeholder="you@example.com"
          ref={emailInputRef}
        />
        <Input
          icon={faLock}
          type="password"
          id="login-form_password"
          placeholder="At least 8 characters"
          ref={passwordInputRef}
        />

        {/* <p>Forget Password?</p> */}
        <button type="submit" className={classes["login_form_btn"]}>
          Login
        </button>
      </form>
      <p className={classes["login-form_signup"]}>
        Don't you have an account?{" "}
        <span onClick={formChangeHandler}> Sign Up</span>
      </p>
    </div>
  );
};
export default LoginForm;
