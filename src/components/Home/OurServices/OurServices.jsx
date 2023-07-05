import React from 'react'
import ServicesCards from './ServicesCards'
import styles from './OurServices.module.css'

export default function OurServices() {
    const serviceCardsData = [
      {
        title: 'Stay connected across the Kingdom',
        pera: 'Nami connecting you anywhere. We offer connectivity solutions and infrastructure so you can safely run your financial operations wherever you are in the Kingdom.',
        imgUrl: '/images/components/services-card/service1.jpg'
      },
      {
        title: 'Your partners for growth',
        pera: 'Nami is your growth partner We provide the latest payment solutions and end-to-end high-quality service to enable our partners, including banks, financial institutions, and retailers to increase their market penetration.',
        imgUrl: '/images/components/services-card/service2.jpg'
      },
      {
        title: 'Manage all your transactions with tailored solutions',
        pera: 'Nami’s one-stop-shop With our customized solutions you can access and manage all your financial transactions easily, quickly, and securely.',
        imgUrl: '/images/components/services-card/service3.jpg'
      },
    ];
  
    return (
      <section id={styles.ourServices}>
        <h2>Our Services</h2>
        <div className={`flex align-center justify-between relative ${styles.ourServicesPanel}`}>
          {serviceCardsData.map((cardData, index) => (
            <ServicesCards
              key={index}
              title={cardData.title}
              pera={cardData.pera}
              imgUrl={cardData.imgUrl}
            />
          ))}
        </div>
      </section>
    );
  }
  