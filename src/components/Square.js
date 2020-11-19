import React from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {console.log("Square Render")}
      {props.value}
    </button>
  );
}

export default Square;
