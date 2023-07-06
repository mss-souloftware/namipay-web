import React from 'react'
import styles from './AboutHero.module.css'
import Container from '../Container/Container'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <>
      <section id={styles.aboutHero}>
        <Container>
          <div className={`flex justify-between ${styles.heroPanel}`}>
            <div className={styles.leftContent}>
              <h1 className='font-extralight text-white'>
                <span className={styles.titleGradient}>A futuristic</span>
                <br />
                company
              </h1>
              <p>
                Driven by collective expertise and an innovative mindset, we seek to make a
                lasting impact on the Saudi Fintech sector.
              </p>
            </div>
            <div className={styles.rightContent}>
              <Image src='/images/components/about/heroBanner.png' fill={true} />
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <div className={styles.ourStory}>
          <h2 className={`${styles.subTitles} text-themeBlue`}>Our Story</h2>
          <p className='text-themeBlue'>
            With a rich background in financial solutions and services, Nami burst into the
            Saudi Fintech scene in 2020 despite the pandemic’s difficulties and challenges.
            Our creative problem-solving mindset, combined with our deep understanding of
            market gaps and pains, enable us to satisfy market needs, demands, and
            aspirations through impactful innovation.
          </p>
        </div>
      </Container >
    </>
  )
}
