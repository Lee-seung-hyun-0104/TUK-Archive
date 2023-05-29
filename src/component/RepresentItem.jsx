import React, { useState } from "react";
import styles from './Card.module.css'

function RepresentItem(props){

  const [isSelected, setIsSelected] = useState(false)

  const handleClick = function(){
    setIsSelected(!isSelected)
  }

  return(
    <div className={styles.card} onClick={handleClick}>
      <div className={isSelected ? styles.img : styles.imgNone}><img src={props.img} alt="작품 이미지" /></div>
      <div className={isSelected ? styles.selected : styles.disabled}>
        <div className={styles.subject}>
          <p className={styles.subjectTitle}>{props.subject}</p>
        </div>
        <div className={styles.select}>
          <p className={styles.order}>{props.order}</p>
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

export default RepresentItem;