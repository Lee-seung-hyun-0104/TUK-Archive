import React from "react";
import styles from './List.module.css'
import CardItem from "./CardItem";
import Cardstyles from './CardItem.module.css'


function CardList(props){

  return(
    <div className={styles.list}>
        <CardItem
            className={Cardstyles.CardItemDefault}
            image={""}
            subject={"웹어플리케이션 응용"}
            userName={"이승현"}
            title={"미니블로그"}
            like={17}/>
        <CardItem
            className={Cardstyles.CardItemHover}
            image={""}
            subject={"웹어플리케이션 응용"}
            userName={"이승현"}
            title={"미니블로그"}
            like={18}/>
        <CardItem
            className={Cardstyles.CardItemDisabled}
            image={""}
            subject={"웹어플리케이션 응용"}
            userName={"이승현"}
            title={"미니블로그"}
            like={19}/>      
    </div>
  )
}

export default CardList