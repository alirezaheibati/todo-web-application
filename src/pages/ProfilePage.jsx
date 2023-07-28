import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import classes from "./ProfilePage.module.css";
import avatar from "./../assets/avatar.png";
import useHttp from "../hooks/use-http";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/FrequentlyUsed/LoadingSpinner";
const themeColor = [
  "rgb(21, 122, 255)",
  "rgb(120, 198, 176)",
  "rgb(118, 188, 134)",
  "rgb(128, 220, 105)",
  "rgb(228, 97, 97)",
  "rgb(225, 126, 128)",
  "rgb(236, 129, 130)",
  "rgb(243, 197, 103)",
  "rgb(229, 122, 87)",
  "rgb(241, 162, 92)",
];
const ProfilePage = () => {
  const userData = useSelector((store) => store.userInfo);
  const { isLoading, error, sendRequest } = useHttp();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("rgb(21, 122, 255)");
  const [nightVision, setNightVision] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageInputRef = useRef();

  const colorPickerHandler = (e) => {
    setSelectedColor(e.target.style.backgroundColor);
  };
  const changeThemeHandler = (e) => {
    setNightVision((prevState) => !prevState);
  };

  const backToHomePageHandler = () => {
    navigate("/");
  };
  const updateUserHandler = (data) => {
    console.log(data);
  };
  const updateUserInfoHanlder = (e) => {
    e.preventDefault();
    sendRequest(
      {
        url: `https://parseapi.back4app.com/users/${localStorage.getItem(
          "userId"
        )}`,
        method: "PUT",
        headers: {
          "X-Parse-Application-Id": "VUBEmOkNcXSUnYBMnOj68tnzu1jnkopyO6Ow2OGb",

          "X-Parse-REST-API-Key": " NbyD4dNV7pNxrzzCRXQXLUd6cb8C2776i53CBSgW",
          "X-Parse-Session-Token": localStorage.getItem("sessionToken"),
          "Content-Type": "application/json",
        },
        body: {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          userAge: +ageInputRef.current.value,
        },
      },
      updateUserHandler
    );
  };
  return (
    <div className={classes["profile-container"]}>
      {isLoading && <LoadingSpinner />}
      <div className={classes["profile-sidebar_container"]}>
        <div className={classes["profile-sidebar_branding"]}>
          <h1>
            Task<span>mate</span>
          </h1>
          <small>Focus, Prioritize, Execute</small>
        </div>
        <div className={classes["profile-user_info"]}>
          <img src={avatar} alt="avatar" />
          <div>
            <p>alireza heibati</p>
            <p title="alirezaheibati91@gmail.com">alirezaheibati91@gmail.com</p>
          </div>
        </div>
        <button className={classes["profile-logout_btn"]}>Log out</button>
      </div>
      <div className={classes["profile-info_container"]}>
        <button
          className={classes["profile-info_backBtn"]}
          onClick={backToHomePageHandler}
        >
          Back
        </button>
        <form onSubmit={updateUserInfoHanlder}>
          <div className={classes["profile-info_actions"]}>
            <label>Email:</label>
            <input type="text" value={localStorage.getItem("email")} readOnly />
          </div>
          <div className={classes["profile-info_actions"]}>
            <label>Name:</label>
            <input
              type="text"
              ref={firstNameRef}
              placeholder={userData.info.firstName}
            />
          </div>
          <div className={classes["profile-info_actions"]}>
            <label>Surname:</label>
            <input
              type="text"
              ref={lastNameRef}
              placeholder={userData.info.lastName}
            />
          </div>
          <div className={classes["profile-info_actions"]}>
            <label>Age:</label>
            <input
              type="number"
              min={7}
              ref={ageInputRef}
              placeholder={userData.info.userAge}
            />
          </div>
          <button type="submit">Save</button>
        </form>
        <div className={classes["profile-app_setting"]}>
          <div>
            <p>Select Theme:</p>
            <ul className={classes["theme-color_container"]}>
              {themeColor.map((colorBox) => {
                return (
                  <li
                    key={colorBox}
                    style={{
                      backgroundColor: colorBox,
                      outline:
                        selectedColor === colorBox
                          ? "2px solid #00C4FF"
                          : "none",
                    }}
                    onClick={colorPickerHandler}
                  >
                    {selectedColor === colorBox ? (
                      <FontAwesomeIcon icon={faCheck} />
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
            <button className={classes["theme-btn"]}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
