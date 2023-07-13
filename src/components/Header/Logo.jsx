import Image from "next/image"
import Link from "next/link"

import { useRouter } from 'next/router';



export default function Logo() {

    const router = useRouter();
    const { locales, locale: activeLocale } = router;

    const currentRoute = router.pathname;
    const isBlueText = currentRoute === '/partners'; 
    const blueTextLogo = isBlueText ? 'namipay-dark-' : 'namipay-';
    
    return (
        <div className="headerLogo">
            <Link href="/">
                <Image src={`../images/${blueTextLogo + activeLocale}.svg`} width={155} height={55} alt="NamiPay" />
            </Link>
        </div>
    )
}
