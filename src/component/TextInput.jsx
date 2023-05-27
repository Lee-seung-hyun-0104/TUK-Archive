import React from 'react'
import styles from './TextInput.module.css'

function TextInput(props) {
    return (
        <textarea className={styles.TextInput}
                style={{'--height': props.height+'px'}}
                height={props.height}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                >
        </textarea>
    )
}

export default TextInput