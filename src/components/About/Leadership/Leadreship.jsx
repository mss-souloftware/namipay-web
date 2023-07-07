import React from 'react'
import styles from './Leadreship.module.css'
import Container from '@/components/Container/Container'
import LeaderCard from './LeaderCard'


export default function Leadreship() {
    return (
        <section id={styles.leadship}>
            <Container>
                <h2 className={`${styles.subTitles} text-themeBlue text-center`}>Leadership</h2>

                <div className={` ${styles.leadCardPanel} flex align-center text-center justify-between`}>
                    <LeaderCard />
                    <LeaderCard />
                </div>
            </Container>
        </section>
    )
}
