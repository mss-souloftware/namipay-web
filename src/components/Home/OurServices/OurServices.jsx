import React from 'react'
import ServicesCards from './ServicesCards'

export default function OurServices() {
    return (
        <section id="ourServices">
            <h2>Our Services</h2>
            <div className="flex align-center justify-between relative">
                <ServicesCards title='Stay connected across the Kingdom' pera='Nami connecting you anywhere
                    We offer connectivity solutions and infrastructure so you can safely run your financial operations wherever you are in the Kingdom.' imgUrl='/images/components/services-card/service1.jpg' />
            </div>
        </section>
    )
}
