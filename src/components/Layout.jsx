import Container from './Container/Container';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import HeroBg from './HeroBg';
import localFont from '@next/font/local'
import PageRevealAnimation from './PageReveal';

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
  return (
    <>
      <main className={codec.className
      }>
        <PageRevealAnimation />
        <Navbar />
        <HeroBg />
        <Container>{children}</Container>
        <Footer />
      </main>
    </>
  );
}
