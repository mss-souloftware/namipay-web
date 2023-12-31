import { useRouter } from 'next/router';
import Container from '../Container/Container';
import styles from './Footer.module.css'
import SocialIcons from './SocialIcons';

export default function Footer() {
  const route = useRouter();
  const currentPath = route.pathname;
  const isPartner = currentPath === '/partners'; 
    const borderClassName = isPartner ? styles.borderGreen : '';
  
  return (
    <footer className={styles.borderClassName}>
      <Container>
        <div className={`${styles.footerPanel} flex align-center`}>
          <div className="rightData">
            <div className="rightDataInner">
              <h2 className='text-themeBlue mb-5 md:mb-0'>Let’s start growing your business!</h2>
            </div>
            <div className="rightDataInner">
              <SocialIcons className='hidden md:flex' />
              <p className={`${styles.copyRight} text-themeBlue hidden md:block`}>© 2022 Luna Space Financial Company. All rights reserved.</p>
            </div>
          </div>
          <div className={`leftData ${styles.borderClassName}`}>
            <div className={`${styles.contactPanel} flex justify-between align-center`}>
              <div className="contactInner">
                <h4>Customer Service</h4>
                <h5>8001230011</h5>
              </div>
              <div className="contactInner">
                <h4>Fax</h4>
                <h5>966112087676</h5>
              </div>
              <div className="contactInner">
                <h4>Email</h4>
                <h5>info@namipay.com.sa</h5>
              </div>
            </div>
            <div className={styles.address}>
              <h4>Address</h4>
              <p>
                Al Rabwa District, Al Moarrekh bin Basher Street P.O.Box 325521, Riyadh 11371, kingdom of Saudi Arabia
              </p>
            </div>
            <div className={styles.subsscribe}>
              <h4>Subscribe to get the latest news and offers.</h4>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
