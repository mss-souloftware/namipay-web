import React, { useEffect, useRef } from "react";
import { gsap, CustomEase } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroBg from "./HeroBg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const textRef = useRef(null);
    const mainRef = useRef(null);
    const peraReveal = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const mainElement = mainRef.current;
        const peraRevealElement = peraReveal.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainElement,
                start: "70% 90%",
                end: "80% 90%",
                markers: true,
                scrub: 2,
                pin: true,
            },
        });
        tl.to(textElement, {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
        }, 'a'),
            tl.to(peraRevealElement, {
                y: 0,
                opacity: 1,
                delay: 2,
                duration: 3,
                ease: "power2.out",
            }, 'a')
    }, []);

    return (
        <section className="heroAnimeStart">
            <HeroBg />
            <div className="relative h-screen">
                <h1 className="text-white text-[10vw] font-extralight uppercase">
                    The Future
                </h1>
                <h2 className="text-white text-[10vw] font-extralight uppercase text-center -mt-6">
                    OF <span className="mainTitleGradient font-medium">SAUDI</span>
                </h2>
                <div className="relative w-[100%] flex items-center justify-between">
                    <h2
                        ref={textRef}
                        className="mainTitleGradient translate-x-[84%] w-2/4 text-white text-[10vw] uppercase font-medium -mt-6"
                    >
                        PAYMENT
                    </h2>
                    <p ref={peraReveal} className="text-white text-2xl w-2/4 pl-10 opacity-0 translate-y-[20%] peraReveal">
                        Leveraging the latest in financial technologies, Nami offers its partners state-of-the-art payment processing solutions, that are tailored to meet business needs.
                    </p>
                </div>
            </div>
        </section>
    );
}
