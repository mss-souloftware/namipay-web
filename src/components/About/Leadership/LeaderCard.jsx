import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Leadreship.module.css'

export default function LeaderCard(props) {
    return (
        <div className={styles.leaderCard}>
            <div className="profileImage">
                <Image className={styles.profile} src='/images/components/about/leader-profile.png' fill={true} />
                <Link className={styles.arrow} href='#'>
                    <Image src='/images/components/about/arrows-white.svg' width={25} height={25} />
                </Link>
            </div>
            <div className="contentData">
                <h3>Osman Oueida</h3>
                <span>Chairman</span>
                <p>Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
            </div>
        </div>
    )
}
