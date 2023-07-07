import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Language from './Language';
import Image from 'next/image';


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
        <>
            <ul className='flex desktopMenu'>
                {
                    links.map((link, index) => (
                        <li key={index}>
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

            <ul className='flex gap-5 align-middle mobileMenu'>

                <li>
                    <Link href='#'
                        className="bg-transparent hover:bg-[#414052]/80 active:bg-[#414052] px-4 py-3 rounded-xl uppercase text-sm transition-colors border-themeGreen border contactBtnHeader"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Image className='-mt-3' src='/images/menu.svg' width={30} height={40} />
                </li>
            </ul>
        </>
    )
}
