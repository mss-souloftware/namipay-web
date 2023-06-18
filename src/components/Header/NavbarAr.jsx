import Container from '../Container/Container';
import MenuItems from './MenuItems';
import Logo from './Logo';
export default function NavbarAr() {


  return (
    <header className="sticky top-0">
      <nav>
        <Container className="flex items-center justify-between py-12 gap-6">
          <MenuItems />
          <Logo />
        </Container>
      </nav>
    </header>
  );
}
