import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Leadreship.module.css'
import CricleButton from '@/components/Global/CricleButton'

export default function LeaderCard(props) {
    return (
        <div className={styles.leaderCard}>
            <div className={styles.profileImage}>
                <Image className={styles.profile} src='/images/components/about/leader-profile.png' fill={true} />
                <Link className={styles.arrow} href='#'>
                    <Image src='/images/components/about/arrows-white.svg' width={50} height={50} />
                </Link>
            </div>
            <div className="contentData">
                <h3>Osman Oueida</h3>
                <span>Chairman</span>
                <p>Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                <div className="text-center flex justify-center py-3 lg:hidden">
                    <CricleButton linkRef="#" text="Learn More" />
                </div>
            </div>
        </div>
    )
}
