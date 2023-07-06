import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import styles from "./OurServices.module.css";

export default function ServicesCards(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: "top 80%",
        end: "bottom 80%",

      },
    });

    tl.fromTo(
      cardElement,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" }
    );
  }, []);

  return (
    <div ref={cardRef} className={`${styles.cardCol} opacity-50`}>
      <div className={styles.imageBox}>
        <Image className={styles.cardImg} src={props.imgUrl} fill={true} />
      </div>
      <div className={styles.cardTxt}>
        <h3>{props.title}</h3>
        <p>{props.pera}</p>
      </div>
    </div>
  );
}
