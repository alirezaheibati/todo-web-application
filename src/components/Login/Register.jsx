import classes from "./Register.module.css";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../FrequentlyUsed/Input";
import { useRef, useState } from "react";
import useHttp from "./../../hooks/use-http";
import LoadingSpinner from "../FrequentlyUsed/LoadingSpinner";
import Modal from "../FrequentlyUsed/Modal";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const [modalVisibility, setModalVisibility] = useState(true);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const { error, isLoading, sendRequest } = useHttp();

  const modalCloseHandler = () => {
    setModalVisibility(false);
  };

  const formChangeHandler = () => {
    props.onChangeVisiblFrom("login");
  };

  const registerdUserDataHandler = (result) => {
    console.log(result);
    localStorage.setItem("userId", result.objectId);
    localStorage.setItem("email", emailInputRef.current.value);
    localStorage.setItem("username", nameInputRef.current.value);
    localStorage.setItem("sessionToken", result.sessionToken);
    navigate("/homepage");
  };

  const userRegisterHandler = (e) => {
    e.preventDefault();
    setModalVisibility(true);
    if (
      nameInputRef.current.value.trim().length > 0 &&
      emailInputRef.current.value.trim().length > 0 &&
      passwordInputRef.current.value.trim().length > 0
    ) {
      sendRequest(
        {
          url: "https://parseapi.back4app.com/users",
          method: "POST",
          body: {
            username: nameInputRef.current.value,
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
          },
          headers: {
            "X-Parse-Application-Id":
              "VUBEmOkNcXSUnYBMnOj68tnzu1jnkopyO6Ow2OGb",

            "X-Parse-REST-API-Key": " NbyD4dNV7pNxrzzCRXQXLUd6cb8C2776i53CBSgW",

            "X-Parse-Revocable-Session": 1,

            "Content-Type": "application/json",
          },
        },
        registerdUserDataHandler
      );
    }
  };
  return (
    <div className={classes["register_form_container"]}>
      {isLoading && <LoadingSpinner />}
      {modalVisibility && error && (
        <Modal title="Error" description={error} onClick={modalCloseHandler} />
      )}
      <h2>Get Started</h2>
      <small>Create your account now.</small>
      <form
        className={classes["register_form_from"]}
        onSubmit={userRegisterHandler}
      >
        <Input
          icon={faUser}
          type="text"
          id="register-form_username"
          placeholder="username"
          ref={nameInputRef}
        />
        <Input
          icon={faEnvelope}
          type="mail"
          id="register-form_mail"
          placeholder="you@example.com"
          ref={emailInputRef}
        />
        <Input
          icon={faLock}
          type="password"
          id="register-form_password"
          placeholder="At least 8 characters"
          ref={passwordInputRef}
        />
        <div className={classes["register_form_checkrules"]}>
          <input type="checkbox" id="register-form_rules" />
          <label htmlFor="register-form_rules"> I agree to all Terms.</label>
        </div>
        <button type="submit" className={classes["register_form_btn"]}>
          Register
        </button>
      </form>
      <p className={classes["register-form_signup"]}>
        Have an account? <span onClick={formChangeHandler}> Login</span>
      </p>
    </div>
  );
};
export default Register;
