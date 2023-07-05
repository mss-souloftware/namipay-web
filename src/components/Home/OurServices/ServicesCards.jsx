import React from 'react'
import Image from 'next/image'
import styles from './OurServices.module.css'

export default function ServicesCards(props) {
    return (
        <div className={styles.cardCol}>
            <div className={styles.imageBox}>
                <Image className={styles.cardImg} src={props.imgUrl} fill={true} />
            </div>
            <div className={styles.cardTxt}>
                <h3>{props.title}</h3>
                <p>
                    {props.pera}
                </p>
            </div>
        </div>
    )
}
