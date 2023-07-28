import ColumnContainer from "../ColumnView/ColumnContainer";
import ListViewContainer from "../ListView/ListViewContainer";
import TaskInformation from "../TaskInformation/TaskInformation";
import classes from "./Overview.module.css";
import ProfilePage from "./../../pages/ProfilePage";
const Overview = (props) => {
  return (
    <div className={classes["overview_container"]}>
      <ColumnContainer />
      {/* <ListViewContainer /> */}
      {/* <ProfilePage /> */}
    </div>
  );
};
export default Overview;
