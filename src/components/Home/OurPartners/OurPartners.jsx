import React from 'react'
import styles from './OurPartners.module.css'
import PartnerCard from './PartnerCard';

export default function OurPartners() {
    const allPartners = [
        {
            title: 'Expertise',
            desc: 'We leverage our leadership in the fintech sector to support our partners.',
        },
        {
            title: '360 solutions',
            desc: 'From setup to launch and management, we deliver comprehensive solutions.',
        },
        {
            title: 'Easy integration',
            desc: 'Our solutions are designed to easily integrated into any F&B and retail system.',
        },
        {
            title: 'Excellent care',
            desc: 'We are available anytime to answer our partners’ needs.',
        }
    ];

    return (
        <section id={styles.ourPartners}>
            <h2> What we guarantee our partners</h2>
            <div className={`flex align-center justify-between relative`}>
                {allPartners.map((partnerData, index) => (
                    <PartnerCard
                        key={index}
                        number={index}
                        title={partnerData.title}
                        desc={partnerData.desc}
                    />
                ))}
            </div>
            <div className={`flex align-center justify-between relative`}>
                <div className="bottomText">
                    <p>We combine our technical know-how with an innovative mindset to provide our
                        partners with comprehensive services and the latest financial technology solutions.</p>
                </div>
            </div>
        </section>
    )
}
