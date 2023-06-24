import Container from './Container/Container';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';
import HeroBg from './HeroBg';


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pb-12">
      <HeroBg />
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
