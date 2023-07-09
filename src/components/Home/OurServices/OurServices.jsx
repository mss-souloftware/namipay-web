import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ServicesCards from "./ServicesCards";
import styles from "./OurServices.module.css";
import Container from "@/components/Container/Container";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const servicesCards = section.querySelectorAll(".servicesCard");

    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers:true,
        scrub: true,
        pin: true,
        x: '0',
        opacity: 1,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2);
          const activeIndex = Math.floor(progress * servicesCards.length);
          servicesCards.forEach((card, index) => {
            card.classList.toggle(
              "active",
              index === activeIndex || index === activeIndex - 1
            );
          });
        },
      },
    });
    
    gsap.fromTo(
      servicesCards,
      { opacity: 1, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "top top+=100",
          end: "bottom center-=100",
          scrub: 2,
          duration:0.2,
        },
      }
    );
  }, []);

  return (
    <section id={styles.ourServices} ref={sectionRef}>
      <Container>
        <div className="cardAnimeWrap">
          <h2>Our Services</h2>
          <div
            className={`flex align-center justify-between relative ourServicesPanel ${styles.ourServicesPanel}`}
          >
            <ServicesCards
              className="servicesCard"
              title="Stay connected across the Kingdom"
              pera="Nami connecting you anywhere. We offer connectivity solutions and infrastructure so you can safely run your financial operations wherever you are in the Kingdom."
              imgUrl="/images/components/services-card/service1.jpg"
            />

            <ServicesCards
              className="servicesCard"
              title="Your partners for growth"
              pera="Nami is your growth partner We provide the latest payment solutions and end-to-end high-quality service to enable our partners, including banks, financial institutions, and retailers to increase their market penetration."
              imgUrl="/images/components/services-card/service2.jpg"
            />

            <ServicesCards
              className="servicesCard"
              title="Manage all your transactions with tailored solutions"
              pera="Nami’s one-stop-shop With our customized solutions you can access and manage all your financial transactions easily, quickly, and securely."
              imgUrl="/images/components/services-card/service3.jpg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
