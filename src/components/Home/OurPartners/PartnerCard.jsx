import React from 'react'
import styles from './OurPartners.module.css'

export default function PartnerCard(props) {
    return (
        <div className={`${styles.partnerCards} flex relative overflow-hidden`}>
            <div className="partnerInner">
                <span className='absolute -left-3 top-0 bottom-0 my-auto'>{props.number + 1}</span>
            </div>
            <div className="partnerData">
                <h3>{props.title}</h3>
                <p>
                    {props.desc}
                </p>
            </div>
        </div>
    )
}
