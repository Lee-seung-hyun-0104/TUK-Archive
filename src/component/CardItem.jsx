import React from "react";
import styles from './Card.module.css'

function CardItem(props){

  return(
    <div className={styles.card} onClick={props.onClick}>
      <div className={styles.img}><img src={props.img} alt="작품 이미지" /></div>
      <div className={styles.content}>
        <div className={styles.subject}>
          <p className={styles.subjectTitle}>{props.subject}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{props.userName}</p>
          <h2 className={styles.title}>{props.title}</h2>
        </div>

        <div className={styles.like}>
          <div className={styles.icon}>❤</div>
          <p className={styles.number}>{props.number}</p>
        </div>
      </div>
    </div>
  )
}

export default CardItem;
