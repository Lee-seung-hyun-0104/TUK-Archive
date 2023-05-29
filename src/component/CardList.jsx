import React, { Children } from "react";
import styles from "./List.module.css";
import CardItem from "./CardItem";

function CardList(props){
  return(
    <div className={styles.list}>
      <div className={styles.title}><h2 className={styles.pageTitle}>{props.pageTitle}Representative Work</h2></div>
      <div>{props.children}</div>
      <div className={styles.cardList}>
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
        <CardItem
        img={"image/CardItem.png"}
        subject={"웹어플리케이션 응용"}
        userName={"정은지"}
        title={"미니블로그"}
        number={17}
        onClick={function(){
          console.log("작품 페이지로 이동")
        }} />
      </div>

    </div>
  )
}

export default CardList;
