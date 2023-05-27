import React, {useState} from "react";

import styles from './Sort.module.css'

import SortBy from "./SortBy";

function Sort(props){

    const [sortByState, setSortByState] = useState("최신순");

    const handleClick = (e) => {
        setSortByState(e);
    };

    return(
        <div className={styles.sort} onClick={props.onClick}>
            <SortBy
                title={"최신순"}
                onClick={() => handleClick("최신순")}
                state={sortByState === "최신순"}
            />
            <SortBy
                title={"좋아요순"}
                onClick={() => handleClick("좋아요순")}
                state={sortByState === "좋아요순"}
            />
            <SortBy
                title={"작품 이름순"}
                onClick={() => handleClick("작품 이름순")}
                state={sortByState === "작품 이름순"}
            />
        </div>
    )
}

export default Sort