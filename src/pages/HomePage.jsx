import { useState } from "react";
import Overview from "../components/HomePage/Overview";
import Sidebar from "../components/HomePage/Sidebar";
import NewTask from "../components/NewTask/NewTask";
import classes from "./HomePage.module.css";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userInfoSliceActions } from "../store";
import LoadingSpinner from "../components/FrequentlyUsed/LoadingSpinner";
const HomePage = () => {
  const { error, isLoading, sendRequest } = useHttp();
  const userData = useSelector((store) => store.userInfo);
  console.log(userData.info);
  const dispatch = useDispatch();
  useEffect(() => {
    const UserDataHandler = (data) => {
      console.log(data);
      dispatch(userInfoSliceActions.setUserInfo(data));
    };
    sendRequest(
      {
        url: `https://parseapi.back4app.com/users/${localStorage.getItem(
          "userId"
        )}`,
        method: "GET",
        headers: {
          "X-Parse-Application-Id": "VUBEmOkNcXSUnYBMnOj68tnzu1jnkopyO6Ow2OGb",

          "X-Parse-REST-API-Key": " NbyD4dNV7pNxrzzCRXQXLUd6cb8C2776i53CBSgW",
          "Content-Type": "application/json",
        },
      },
      UserDataHandler
    );
  }, [userData.refresher]);

  const [taskView, setTaskView] = useState("column");
  const viewChangeHandler = (view) => {
    setTaskView(view);
  };
  return (
    <div className={classes["home-page_container"]}>
      {isLoading && <LoadingSpinner />}
      <Sidebar onChangeView={viewChangeHandler} />
      <Overview view={taskView} />
    </div>
  );
};
export default HomePage;
