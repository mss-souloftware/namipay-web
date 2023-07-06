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

    gsap.to(cardElement, {
      opacity: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div ref={props.forwardedRef || cardRef} className={`${styles.cardCol} ${props.className}`}>
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
