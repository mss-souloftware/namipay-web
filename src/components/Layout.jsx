import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import HeroBg from './HeroBg';
import localFont from '@next/font/local'
import PageRevealAnimation from './PageReveal';

import { useRouter } from 'next/router';

// Font files can be colocated inside of `pages`
const codec = localFont({
  src: [
    {
      path: '../fonts/codec-warm-thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/codec-warm-bold.ttf',
      weight: '500',
      style: 'normal',
    }
  ],
})


export default function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname === '/';
  const showFooter = router.pathname === '/' || router.pathname === '/partners';
  return (
    <>
      <main className={codec.className
      }>
        {showHeader && <PageRevealAnimation />}
        <Navbar />
        {showHeader && <HeroBg />}
        {children}
        {showFooter && <Footer />}
      </main>
    </>
  );
}
