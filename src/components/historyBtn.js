import React, { Component } from "react";

function HistoryBtn(props) {
  return props.isBold ? (
    <li>
      <button onClick={props.onClick}>
        <b>{props.des}</b>
      </button>
    </li>
  ) : (
    <li>
      <button onClick={props.onClick}>{props.des}</button>
    </li>
  );
}

export default HistoryBtn;
