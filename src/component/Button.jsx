import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${styles[props.type]} ${styles[props.size]} `}
      onClick={props.onClick}
    >
      {props.icon && React.cloneElement(props.icon, { className: styles.icon })}
      {props.title || "버튼"}
    </button>
  );
}

export default Button;
