import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PageRevealAnimation() {
    const animateWrapRef = useRef(null);

    useEffect(() => {
        const animateWrap = animateWrapRef.current;
        const tl = gsap.timeline();
        tl.to(animateWrap, {
            scale: 10,
            width: '500px',
            height: '500px',
            duration: 5,
            borderRadius: '100%',
        });
    }, []);

    return (
        <>
            <div className="ariaHiddenAnimate h-screen w-screen bg-white z-30"></div>
            <div className="animateWrap" ref={animateWrapRef}>
            </div>
        </>
    );
}
