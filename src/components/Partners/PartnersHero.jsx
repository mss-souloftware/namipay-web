import Container from '@/components/Container/Container'
import Image from 'next/image'
import React from 'react'

import styles from './PatnersHero.module.css'

export default function PartnersHero() {
    return (
        <section id={styles.partnersHero}>
            <Container>
                <div className={styles.partnersHeroPanel}>
                    <div className={styles.partnersHeroPanelInner}>
                        <Image src='/images/components/partners/heroBanner.jpg' fill={true} />
                    </div>
                    <div className={styles.partnersHeroPanelInner}>
                        <h1>Nami’s Success Partners</h1>
                        <p>
                            Throughout the years, Nami has served a wide range of partners and has contributed to the growth of the FinTech sector. Today, Nami aspires to continue adding value to the market through sustainable partnerships and creative financial solutions.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}
