import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './Hero.module.css';


export default function Hero() {

    const textRef = useRef(null);
    const mainRef = useRef(null);
    const peraReveal = useRef(null);

    useLayoutEffect(() => {
        const textElement = textRef.current;
        const mainElement = mainRef.current;
        const peraRevealElement = peraReveal.current;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainElement,
                start: "75% 80%",
                end: "70% 80%",
                scrub: 3,
            },
        });

        tl.to(
            textElement,
            {
                x: 0,
                y: 0,
                duration: 3,
                ease: "power1.inOut",
            },
            "a"
        ).to(
            peraRevealElement,
            {
                y: 0,
                opacity: 1,
                duration: 3,
                ease: "power1.inOut",
            },
            "a"
        );
    },
        []);

    return (
        <section ref={mainRef} className={styles.heroAnimeStart}>
            <div className="relative h-screen">
                <h1 className="text-white font-extralight uppercase">
                    The Future
                </h1>
                <h2 className="text-white font-extralight uppercase text-center -mt-6">
                    OF <span className="mainTitleGradient font-medium">SAUDI</span>
                </h2>
                <div className="relative w-[100%] flex items-center justify-between">
                    <h2
                        ref={textRef}
                        className="mainTitleGradient translate-x-[84%] w-2/4 text-white uppercase font-medium -mt-6"
                    >
                        PAYMENT
                    </h2>
                    <p ref={peraReveal} className="text-white text-2xl font-light w-2/4 pl-10 opacity-0 translate-y-[45%] peraReveal">
                        Leveraging the latest in financial technologies, Nami offers its partners state-of-the-art payment processing solutions, that are tailored to meet business needs.
                    </p>
                </div>
            </div>
        </section>
    );
}
