import React from "react";
import styles from "./List.module.css"
import RepresentItem from "./RepresentItem";

function RepresentList(props){
  return(
    <div className={styles.list}>
      <div className={styles.title}><h2 className={styles.pageTitle}>{props.pageTitle}대표작 설정하기</h2></div>
      <div>{props.Children}</div>
      <div className={styles.cardList}>
        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />

        <RepresentItem img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        order={1}
        userName={"정은지"}
        title={"미니블로그"}
        number={17} />
      </div>

    </div>
  )
}

export default RepresentList;