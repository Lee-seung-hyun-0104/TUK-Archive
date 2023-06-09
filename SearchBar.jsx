import React, { useState } from 'react';
import styles from './SearchBar.module.css'
import TextInput from './TextInput'

import SelectedPng from '../icon/Selected.png'
import DefaultPng from '../icon/Default.png'

function SearchBar(props) {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
      setIsSelected(true);
    }

    const handleBlur = () => {
        setIsSelected(false);
    }

    return (
        <div className={`${styles.SearchBar} ${isSelected ? styles.Selected : ''}`} onClick={handleClick}
            onBlur={handleBlur}>


            <img src={isSelected ? process.env.PUBLIC_URL + SelectedPng : DefaultPng} className={styles.Icon} alt=""/> 

            <TextInput 
            height={22}
            placeholder={"Search..."}
            />
        </div>

    )
}

export default SearchBar;