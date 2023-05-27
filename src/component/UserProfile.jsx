import React from "react";

import styles from './UserProfile.module.css'

function UserProfile(props){
    return(
        <div className={styles.userProfile}>
            <div className={styles.info}>
                <div className={styles.profileImage}>
                    <div className={styles.image} style={{'--background-image': 'url(' + props.image + ')'}}></div>
                    <div className={styles.iconButton}>Icon Button</div>
                </div>
                <div className={styles.brief}>
                    <h4>{props.userName}</h4>
                    <p>{props.email}</p>
                </div>
            </div>
            <div className={styles.summary}>
                <div className={styles.summaryItem}>
                    <p>결과물</p>
                    <h3>{props.postNumber}</h3>
                </div>
                <div className={styles.summaryItem}>
                    <p>좋아요</p>
                    <h3>{props.likeNumber}</h3>
                </div>
                <div className={styles.summaryItem}>
                    <p>마이페이지 링크</p>
                    props.linkCopy 버튼 자리~
                </div>
            </div>
        </div>
    )
}

export default UserProfile