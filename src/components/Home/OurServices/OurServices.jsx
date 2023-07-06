import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const cardRef = useRef(null);
  useLayoutEffect(() => {
    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;

    gsap.registerPlugin(ScrollTrigger);

    const solTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionElement,
        start: "10% 50%",
        end: "10% 50%",
        scrub: 3,
        pin: sectionElement,
      },
    });

    solTl.to(sectionElement, {
      x: 0,
      opacity: 1,
      duration: 4,
      ease: "power1.inOut",
    }).to(
      headingElement,
      {
        margin: "0px",
        opacity: 1,
        ease: "power1.inOut",
      }
    );

    const cardElements = cardRefs.current;
    cardElements.forEach((cardElement, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardElement,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      tl.fromTo(
        cardElement,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.inOut" }
      );
    });

    return () => {
      const activeScrollTriggers = ScrollTrigger.getAll();
      activeScrollTriggers.forEach((scrollTrigger) => {
        scrollTrigger.disable(); // or scrollTrigger.kill()
      });
    };
  }, []);

  return (
    <section ref={sectionRef} id={styles.ourServices} className='opacity-0 translate-x-[30%]'>
      <h2 ref={headingRef}>Our Services</h2>
      <div className={`flex align-center justify-between relative ourServicesPanel ${styles.ourServicesPanel}`}>
        {serviceCardsData.map((cardData, index) => (

          <ServicesCards
            ref={(el) => (cardRefs.current[index] = el)}
            key={index}
            index={index}
            title={cardData.title}
            pera={cardData.pera}
            imgUrl={cardData.imgUrl}
          />
        ))}
      </div>
    </section>
  );
}
