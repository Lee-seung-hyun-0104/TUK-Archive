import React, { useState } from 'react'
import styles from './Filter.module.css'

function Chips(props) {
    const [isSelected, setIsSelected] = useState(false)

    const handleClick = () => {
      setIsSelected(!isSelected)
    }

    const classNames = `${styles.Chips} ${isSelected ? styles.Selected : ''}`

    return (
        <div className={classNames} onClick={handleClick}>
            {props.text || "text"}
        </div>

    )
}

export default Chips