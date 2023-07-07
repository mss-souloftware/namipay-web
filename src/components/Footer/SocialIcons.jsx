import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function SocialIcons() {
    return (
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
    )
}
