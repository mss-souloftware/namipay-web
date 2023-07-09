import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimationSection = () => {
  const sectionRef = useRef(null);
  const columnsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const columns = columnsRef.current;

    gsap.set(columns, { opacity: 0.5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true,
        pin: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          pinSpacing: false,
        },
        onEnter: () => section.style.overflow = 'hidden',
        onLeaveBack: () => section.style.overflow = 'auto',
      },
    });

    tl.to(columns, {
      opacity: 1,
      stagger: 0.2,
      onComplete: () => ScrollTrigger.update(),
    });
  }, []);

  return (
    <>
      <style jsx>{`
        section#holdSec {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000;
        }

        .columns {
          display: flex;
          justify-content: s;
        }

        .column {
          height: 800px;
          width: calc(33.33% - 20px);
          background: red;
        }

        .emtySec {
          height: 100vh;
          width: 100%;
          background: green;
        }
      `}</style>

      <section className='emtySec'></section>

      <section id='holdSec' ref={sectionRef}>
        <div className='columns'>
          <div className='column' ref={(el) => columnsRef.current.push(el)}>
            Column 1
          </div>
          <div className='column' ref={(el) => columnsRef.current.push(el)}>
            Column 2
          </div>
          <div className='column' ref={(el) => columnsRef.current.push(el)}>
            Column 3
          </div>
        </div>
      </section>
      <section className='emtySec'></section>
    </>
  );
};

export default AnimationSection;
