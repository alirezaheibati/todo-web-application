import { useState } from "react";
import Overview from "../components/HomePage/Overview";
import Sidebar from "../components/HomePage/Sidebar";
import NewTask from "../components/NewTask/NewTask";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={classes["home-page_container"]}>
      <Sidebar />
      <Overview />
    </div>
  );
};
export default HomePage;
