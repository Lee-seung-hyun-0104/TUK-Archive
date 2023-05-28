import React from "react";
import styles from "./Button.module.css";

function FloatButton(props) {
  return (
    <button
      className={`${styles[props.type]} ${styles[props.size]} `}
      onClick={props.onClick}
    >
      {props.icon && React.cloneElement(props.icon, { className: styles.icon })}
    </button>
  );
}

export default FloatButton;
