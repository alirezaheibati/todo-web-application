import { useState } from "react";
import classes from "./NewTaskPalette.module.css";
const taskColor = [
  "#FFEECC",
  "#E8FFCE",
  "#F6F4EB",
  "#F4D9E7",
  "#F4F2DE",
  "#EDE4FF",
  "#F8FDCF",
  "#DAFFFB",
  "#ECF8F9",
  "#D2E9E9",
  "#E7CBCB",
  "#FDE2F3",
  "#F0F0F0",
  "#FFE6C7",
  "#F5C6EC",
  "#E9EDC9",
  "#FBFFB1",
  "#DDF7E3",
  "#ECF2FF",
  "#E3F6FF",
];
const NewTaskPalette = (props) => {
  const [btnColor, setBtnColor] = useState("#FFEECC");

  const paletteColorSelector = (e) => {
    setBtnColor(e.target.getAttribute("data-palette-color"));
  };

  const choosePaletteColor = () => {
    props.onHidePalette(btnColor);
  };
  return (
    <div className={classes["palette-container"]}>
      <div className={classes["palette-backdrop"]}></div>
      <div className={classes["palette-content"]}>
        <ul>
          {taskColor.map((color) => {
            return (
              <li
                style={{
                  backgroundColor: color,
                  outline: `${btnColor === color ? "1px solid blue" : ""}`,
                }}
                onClick={paletteColorSelector}
                data-palette-color={color}
                key={"c" + color}
              ></li>
            );
          })}
        </ul>

        <button
          style={{ backgroundColor: btnColor, color: "gray" }}
          onClick={choosePaletteColor}
        >
          Set color
        </button>
      </div>
    </div>
  );
};
export default NewTaskPalette;
