import { useEffect } from 'react';
import { gsap } from 'gsap';

const smoothScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: 0,
        ease: 'power3.out',
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default smoothScroll;
