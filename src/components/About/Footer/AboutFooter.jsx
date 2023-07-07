import Container from '@/components/Container/Container'
import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import CricleButton from '@/components/Global/CricleButton'

export default function AboutFooter() {
  return (
    <footer id={styles.abtFooter}>
      <Container>
        <div className={`${styles.footerPanel} flex align-center`}>
          <div className="rightData">
            <div className="rightDataInner">
              <h2 className='text-white'>How can we help?</h2>
              <p className='mt-3'>Learn more about our services</p>
              <CricleButton linkRef='#' text='Contact Us'/>
            </div>
            <div className="rightDataInner">
              <ul className={`flex gap-4 opacity-50 mb-5 ${styles.socialList}`}>
                <li>
                  <Link href="#">
                    <Image src="/images/icons/facebook.svg" width={25} height={25} />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src="/images/icons/linkedin.svg" width={25} height={25} />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src="/images/icons/youtube.svg" width={25} height={25} />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src="/images/icons/twitter.svg" width={25} height={25} />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <Image src="/images/icons/instagram.svg" width={25} height={25} />
                  </Link>
                </li>
              </ul>
              <p className={`${styles.copyRight} text-white`}>© 2022 Luna Space Financial Company. All rights reserved.</p>
            </div>
          </div>
          <div className="leftData">
            <div className={styles.subsscribe}>
              <h4>Become a partner</h4>
              <p className='mt-3'>Join our growing list of partners</p>
              <CricleButton linkRef='#' text='Become a Partner'/>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
