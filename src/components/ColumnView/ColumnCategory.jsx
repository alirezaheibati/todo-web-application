import classes from "./ColumnCategory.module.css";
const ColumnCategory = (props) => {
  return (
    <div className={classes["column-category"]}>
      <div
        className={classes["column-category_header"]}
        style={{ borderTop: `3px solid ${props.borderColor}` }}
      >
        <p>{props.title}</p>
        {props.title === "Todo" && <button>+</button>}
      </div>
      <div>{props.children}</div>
    </div>
  );
};
export default ColumnCategory;
