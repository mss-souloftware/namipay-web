import Link from 'next/link'
import React from 'react'
import styles from './CircleButton.module.css'

export default function CricleButton(props) {
    return (
        <Link className={styles.circleButtonWhite} href={props.linkRef}>
            <div className={styles.indicate}>
                <div className={styles.dot}></div>
            </div>
            <span>
                {props.text}
            </span>
        </Link>
    )
}
