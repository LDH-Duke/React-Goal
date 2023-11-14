import React from 'react'
import styles from './Input.module.css'

export const Input = ({ onChange, onClick, value }) => {
    return (
        <form className={styles.inputBox}>
            <input
                className={styles.input}
                type='text'
                placeholder='What is your goal?'
                onChange={onChange}
                value={value}
            />
            <button type='submit' className={styles.button}>
                Send
            </button>
        </form>
    )
}
