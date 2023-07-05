import React from 'react'
import styles from './OurSolutions.module.css'
import Image from 'next/image'

export default function OurSolutions() {
    return (
        <section id={styles.ourSolutions}>
            <h2>Our Solutions</h2>
            <div className={`flex align-center justify-between relative bg-white ${styles.solutionPanel}`}>
                <div className="solutionBanner flex align-center">
                    <Image src='/images/components/solutions/payments-model.png' fill={true} />
                </div>
                <div className={`${styles.solutionData} flex align-center`}>
                    <div className="textData flex align-center flex-col justify-center">
                        <h3 className='mainGradienText'>Seamless payments right at hand</h3>
                        <p className='text-themeBlue'>Nami offers a variety of payments and POS solutions that cater to every need.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
