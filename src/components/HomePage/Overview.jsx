import ColumnContainer from "../ColumnView/ColumnContainer";
import classes from "./Overview.module.css";
const Overview = () => {
  return (
    <div className={classes["overview_container"]}>
      <ColumnContainer />
    </div>
  );
};
export default Overview;
