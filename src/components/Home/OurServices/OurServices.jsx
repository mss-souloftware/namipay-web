import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ServicesCards from './ServicesCards'
import styles from './OurServices.module.css'



export default function OurServices() {

  const sectionRef = useRef();
  const headingRef = useRef();
  const cardWrap = useRef();
  const cardRef1 = useRef();
  const cardRef2 = useRef();
  const cardRef3 = useRef();

  useEffect(() => {
    const sectionElement = sectionRef.current;
    const headingElement = headingRef.current;
    const card1Element = cardRef1.current;
    const card2Element = cardRef2.current;
    const card3Element = cardRef3.current;

    gsap.registerPlugin(ScrollTrigger);



    const solTl = gsap.timeline({
      
      scrollTrigger: {
        trigger: cardWrap.current,
        start: "0% 50%",
        end: "100% 50%",
        scrub: 3,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // snap: 1,
        markers: true,
      },
    });

    solTl
      // .to(sectionElement, {
      //   x: 0,
      //   opacity: 1,
      //   duration: 4,
      //   ease: "power1.inOut",
      // })
      .to(
        headingElement,
        {
          margin: "0px",
          opacity: 1,
          ease: "power1.inOut",
        }
      ).to(
        card1Element,
        {
          opacity: 1,
          ease: "none",
        }
      ).to(
        card2Element,
        {
          opacity: 1,
          ease: "none",
        }
      ).to(
        card3Element,
        {
          opacity: 1,
          ease: "none",
        }
      )

  }, []);

  return (
    <section ref={sectionRef} id={styles.ourServices} className='translate-x-[0%]'>
      <div ref={cardWrap} className="cardAnimeWrap">
        <h2 ref={headingRef}>Our Services</h2>
        <div className={`flex align-center justify-between relative ourServicesPanel ${styles.ourServicesPanel}`}>

          <ServicesCards className="opacity-50"
            forwardedRef={cardRef1}
            title='Stay connected across the Kingdom'
            pera='Nami connecting you anywhere. We offer connectivity solutions and infrastructure so you can safely run your financial operations wherever you are in the Kingdom.'
            imgUrl='/images/components/services-card/service1.jpg'
          />

          <ServicesCards className="opacity-50"
            forwardedRef={cardRef2}
            title='Your partners for growth'
            pera='Nami is your growth partner We provide the latest payment solutions and end-to-end high-quality service to enable our partners, including banks, financial institutions, and retailers to increase their market penetration.'
            imgUrl='/images/components/services-card/service2.jpg'
          />

          <ServicesCards className="opacity-50"
            forwardedRef={cardRef3}
            title='Manage all your transactions with tailored solutions'
            pera='Nami’s one-stop-shop With our customized solutions you can access and manage all your financial transactions easily, quickly, and securely.'
            imgUrl='/images/components/services-card/service3.jpg'
          />

        </div>
      </div>
    </section>
  );
}
