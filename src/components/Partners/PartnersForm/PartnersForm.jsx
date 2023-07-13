import React from 'react'
import Container from '@/components/Container/Container'

import styles from './PartnersForm.module.css'

export default function PartnersForm() {
    return (
        <section id={styles.partnersForm}>
            <Container>
                <div className={styles.partnerFormPanel}>
                    <h2>Partner with NAMI and gain more than just a service provider.</h2>
                    <p>
                        As your trusted collaborator, we will be working hand-in-hand to develop tailored solutions that propel your growth.
                    </p>
                    <form action="">
                        <div className={styles.formInnerPanel}>
                            <div className={styles.formInner}>
                                <input type="text" placeholder='First Name' />
                            </div>
                            <div className={styles.formInner}>
                                <input type="text" placeholder='Last Name' />
                            </div>
                        </div>
                        <div className={styles.formInnerPanel}>
                            <div className={styles.formInner}>
                                <input type="email" placeholder='Email Address' />
                            </div>
                            <div className={styles.formInner}>
                                <input type="tel" placeholder='Mobile Number' />
                            </div>
                        </div>
                        <div className={styles.formInnerPanel}>
                            <div className={styles.formInner}>
                                <input type="text" placeholder='Company' />
                            </div>
                            <div className={styles.formInner}>
                                <input type="text" placeholder='Position' />
                            </div>
                        </div>
                        <textarea name="textmessage" placeholder='Your message...' cols="30" rows="10"></textarea>
                        <button type='submit'>Become a Partner</button>
                    </form>
                </div>
            </Container>
        </section>
    )
}
