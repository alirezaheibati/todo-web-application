import { useState } from "react";
import classes from "./NewTaskPalette.module.css";
const taskColor = [
  "rgb(132, 198, 161)",
  "rgb(120, 198, 176)",
  "rgb(118, 188, 134)",
  "rgb(128, 220, 105)",
  "rgb(228, 97, 97)",
  "rgb(225, 126, 128)",
  "rgb(236, 129, 130)",
  "rgb(243, 197, 103)",
  "rgb(185, 153, 94)",
  "rgb(229, 122, 87)",
  "rgb(241, 162, 92)",
  "rgb(226, 138, 96)",
  "rgb(104, 151, 194)",
  "rgb(116, 170, 221)",
  "rgb(60, 69, 231)",
  "rgb(109, 175, 206)",
  "rgb(108, 178, 247)",
  "rgb(146, 134, 234)",
  "rgb(192, 116, 209)",
  "rgb(72, 103, 116)",
];
const NewTaskPalette = (props) => {
  const [btnColor, setBtnColor] = useState("rgb(132, 198, 161)");

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
          style={{ backgroundColor: btnColor }}
          onClick={choosePaletteColor}
        >
          Set color
        </button>
      </div>
    </div>
  );
};
export default NewTaskPalette;
