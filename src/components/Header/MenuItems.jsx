import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Language from './Language';


const links = [
    { href: '/what-we-offer', label: 'whatWeOffer' },
    { href: '/about', label: 'about' },
    { href: '/partners', label: 'partners' },
    { href: '/news-and-events', label: 'news' },
    { href: '/contact', label: 'contact' }
];


export default function MenuItems() {
    const { t } = useTranslation('header');
    return (
        <ul className='flex'>
            {
                links.map((link, index) => (
                    <li>
                        <Link
                            key={index}
                            href={link.href}
                            className=" text-white hover:text-themeGreen transition-colors mx-[10px]"
                        >
                            {t(link.label)}
                        </Link>
                    </li>
                ))
            }
            <Language />
        </ul>
    )
}
