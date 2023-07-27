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
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [hideMenu, setHideMenu] = useState(false);
  const userData = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setHideMenu((prev) => !prev);
  };
  console.log(userData);
  const userLogoutHandler = () => {
    if (confirm("Do you want to logout?")) {
      localStorage.clear();
      dispatch(userInfoSliceActions.userLogout());
      navigate("/login");
    }
  };
  return (
    <div className={classes["sidebar_container"]}>
      <div className={classes["sidebar_branding"]}>
        <h1>
          Task<span>Mate</span>
        </h1>
        <small>Focus, Prioritize, Execute</small>
      </div>
      <div className={classes["sidebar-user_info"]}>
        <img src={avatar} alt="avatar" />
        <div>
          <p>{localStorage.getItem("username")}</p>
          <p title={localStorage.getItem("email")}>
            {localStorage.getItem("email")}
          </p>
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
