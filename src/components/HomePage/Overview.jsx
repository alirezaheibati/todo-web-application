import ColumnContainer from "../ColumnView/ColumnContainer";
import ListViewContainer from "../ListView/ListViewContainer";
import classes from "./Overview.module.css";
const Overview = (props) => {
  return (
    <div className={classes["overview_container"]}>
      <ColumnContainer />
      {/* <ListViewContainer /> */}
    </div>
  );
};
export default Overview;
