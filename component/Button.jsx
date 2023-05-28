import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={` ${styles[props.type]} ${styles[props.size]} `}
      onClick={props.onClick}
    >
      {props.icon}
      {props.title || "버튼"}
    </button>
  );
}

export default Button;
