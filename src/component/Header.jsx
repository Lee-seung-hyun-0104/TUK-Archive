import React, {useState} from "react";

import styles from './Header.module.css'
import Logo from '../logo.png'

import Menu from "./Menu.jsx";

function Header(props){

    const [menuState, setMenuState] = useState("메인");

    const handleClick = (e) => {
        setMenuState(e);
    };

    return(
        <div className={styles.header}>
            <div className={styles.navi}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo" onClick={() => handleClick("메인")}></img>
                </div>  
                <div className={styles.menuList}>
                    <Menu
                        title={"공지사항"}
                        onClick={() => handleClick("공지사항")}
                        state={menuState === "공지사항"}
                    />
                    <Menu
                        title={"학과정보"}
                        onClick={() => handleClick("학과정보")}
                        state={menuState === "학과정보"}
                    />
                    <Menu
                        title={"졸업"}
                        onClick={() => handleClick("졸업")}
                        state={menuState === "졸업"}
                    />
                    <Menu
                        title={"과제물"}
                        onClick={() => handleClick("과제물")}
                        state={menuState === "과제물"}
                    />
                </div>
            </div>
            <p>버튼이랑 아이콘 들어갈 자리~</p>
        </div>
    )
}

export default Header