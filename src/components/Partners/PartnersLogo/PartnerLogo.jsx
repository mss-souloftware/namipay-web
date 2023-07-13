import React from 'react'
import Image from 'next/image'
import Container from '../../Container/Container'

import styles from './PartnersLogo.module.css'

export default function PartnerLogo() {
    return (
        <section id={styles.partnersLogo}>
            <Container>
                <div className={styles.partnersLogoBg}>
                    <div className={styles.logoPanel}>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white1.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white2.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white3.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white4.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white5.svg' fill={true} />
                        </div>

                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white6.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white7.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white8.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white9.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white10.svg' fill={true} />
                        </div>

                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white1.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white2.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white3.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white4.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white5.svg' fill={true} />
                        </div>


                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white6.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white7.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white8.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white9.svg' fill={true} />
                        </div>
                        <div className={styles.logoPanelInner}>
                            <Image src='/images/components/partners/logos/partners-white10.svg' fill={true} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
