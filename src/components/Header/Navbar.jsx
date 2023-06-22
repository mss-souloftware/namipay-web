import Container from '../Container/Container';
import MenuItems from './MenuItems';
import Logo from './Logo';
export default function Navbar() {


  return (
    <header className="sticky top-0 z-20">
      <nav>
        <Container className="flex items-center justify-between py-12 gap-6 customNav">
          <Logo />
          <MenuItems />
        </Container>
      </nav>
    </header>
  );
}
