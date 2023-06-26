import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function PageRevealAnimation() {
    const animateWrapRef = useRef(null);
    const ariaHiddenAnimateRef = useRef(null);

    useEffect(() => {
        const animateWrap = animateWrapRef.current;
        const ariaHiddenAnimate = ariaHiddenAnimateRef.current;

        const timeline = gsap.timeline();
        timeline.to(animateWrap, {
            opacity: 1,
        }, 'ab')
            .to(animateWrap, {
                scale: 10,
                width: '500px',
                height: '500px',
                duration: 1,
                borderRadius: '100%',
                ease: "power1.in",
            }, 'ab')
            .to([animateWrap, ariaHiddenAnimate], {
                opacity: 0,
                ease: "power1.in",
                display: 'none',
                zIndex: '-999',

            });
    }, []);

    return (
        <>
            <div className="ariaHiddenAnimate fixed left-0 top-0 h-screen w-screen bg-white z-30" ref={ariaHiddenAnimateRef}></div>
            <div className="animateWrap p-5" ref={animateWrapRef}>
                <div className="animateInner w-full h-full bg-[url('/images/banners/home-hero-bg.jpg')] bg-cover bg-no-repeat"></div>
            </div>
        </>
    );
}
