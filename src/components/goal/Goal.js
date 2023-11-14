import React from 'react'
import styles from './Goal.module.css'

export const Goal = ({ id, status, msg, onCheckChange }) => {
    return (
        <div className={styles.goalWrap}>
            <label
                className={status ? styles.textDisable : styles.text}
                htmlFor={id}
            >
                {
                    status && <div className={styles.clean} />
                }
                <input
                    type='checkbox'
                    id={id}
                    name={id}
                    data-msg={msg}
                    onChange={onCheckChange}
                    checked={status}
                />
                {msg}
            </label>
        </div>
    )
}
