import classes from "./Sidebar.module.css";
import avatar from "./../../assets/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
  faGear,
  faList,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { userInfoSliceActions } from "../../store";
import { useSelector, useDispatch } from "react-redux";
const Sidebar = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const userData = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setHideMenu((prev) => !prev);
  };
  const userLogoutHandler = () => {
    if (confirm("Do you want to quit?")) {
      localStorage.clear();
      dispatch(userInfoSliceActions.userLogout());
    }
  };
  return (
    <div className={classes["sidebar_container"]}>
      <div className={classes["sidebar_branding"]}>
        <h1>
          Task<span>mate</span>
        </h1>
        <small>Focus, Prioritize, Execute</small>
      </div>
      <div className={classes["sidebar-user_info"]}>
        <img src={avatar} alt="avatar" />
        <div>
          <p>{userData.username}</p>
          <p title={userData.email}>{userData.email}</p>
        </div>
      </div>
      <div
        className={`${classes["sidebar-user_menu"]} ${
          hideMenu ? classes.disable : ""
        }`}
      >
        <div>
          <p>Menu</p>
          <button
            className={classes["sidebar-user_chevron"]}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faTableColumns} />
            <p>Column View</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faList} />
            <p>List View</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarDays} />
            <p>Calendar View</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} />
            <p>Setting</p>
          </li>
        </ul>
        <ul></ul>
      </div>
      <button
        className={classes["sidebar-logout_btn"]}
        onClick={userLogoutHandler}
      >
        Log out
      </button>
    </div>
  );
};
export default Sidebar;
