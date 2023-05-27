import React from "react";

import styles from './CardItem.module.css'


function CardItem(props){

  return(
    <div className={styles.CardItem}>
      <div className={styles.background}>{props.image}</div>
      <div className={styles.content}>
        <div className={styles.subject}>
            <p>{props.subject}</p>
        </div>
        <div className={styles.name}>
            <p className={styles.username}>{props.userName}</p>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
        <div className={styles.like}>
            <div className={styles.icon}></div>
            <div className={styles.number}>{props.like}</div>
        </div>
      </div>
    </div>
  )
}

export default CardItem