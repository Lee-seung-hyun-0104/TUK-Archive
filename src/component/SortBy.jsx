import React from "react";

import styles from './Sort.module.css'

function SortBy(props){
    return(
        <div className={props.state ? styles.sortByActive : styles.sortBy} onClick={props.onClick}>
            <p >{props.title}</p>
        </div>
    )
}

export default SortBy