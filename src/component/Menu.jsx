import React from "react";

import styles from './Header.module.css'

function Menu(props){
    return(
        <div className={props.state ? styles.currentMenu : styles.menu} onClick={props.onClick}>
            <p>{props.title}</p>
        </div>
    )
}

export default Menu