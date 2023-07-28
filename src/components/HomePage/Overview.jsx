import ColumnContainer from "../ColumnView/ColumnContainer";
import ListViewContainer from "../ListView/ListViewContainer";
import classes from "./Overview.module.css";
const Overview = (props) => {
  return (
    <div className={classes["overview_container"]}>
      {props.view === "column" && <ColumnContainer />}
      {props.view === "list" && <ListViewContainer />}
    </div>
  );
};
export default Overview;
