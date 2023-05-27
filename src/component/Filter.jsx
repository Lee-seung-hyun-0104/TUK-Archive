import React from 'react'
import styles from './Filter.module.css'
import Chips from './Chips'

function Filter(props) {
    return (

        <div className={styles.Filter}>
            <div className={styles.filterTitle}>{props.title || "text"}</div>
            <div className={styles.filterChips}>
                {props.chips.map((chipText, index) => (
                    <Chips key={index} text={chipText}/>
                ))}
            </div>
        </div>
    )


}

export default Filter