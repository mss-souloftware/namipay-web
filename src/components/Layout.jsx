import Container from './Container/Container';
import Footer from './Footer/Footer';
import Navbar from './Header/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pb-12">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}
