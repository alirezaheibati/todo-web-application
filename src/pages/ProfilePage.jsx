import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./ProfilePage.module.css";
import avatar from "./../assets/avatar.png";
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
  const [selectedColor, setSelectedColor] = useState("rgb(21, 122, 255)");
  const [nightVision, setNightVision] = useState(false);

  const colorPickerHandler = (e) => {
    setSelectedColor(e.target.style.backgroundColor);
  };
  const changeThemeHandler = (e) => {
    setNightVision((prevState) => !prevState);
  };
  return (
    <div className={classes["profile-container"]}>
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
        <button className={classes["profile-info_backBtn"]}>Back</button>
        <form>
          <div className={classes["profile-info_actions"]}>
            <label htmlFor="">Email:</label>
            <input type="text" value={"alirezaheibati@gmail.com"} readOnly />
          </div>
          <div className={classes["profile-info_actions"]}>
            <label htmlFor="">Name:</label>
            <input type="text" />
          </div>
          <div className={classes["profile-info_actions"]}>
            <label htmlFor="">Surname:</label>
            <input type="text" />
          </div>
          <div className={classes["profile-info_actions"]}>
            <label htmlFor="">Age:</label>
            <input type="number" min={7} />
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
