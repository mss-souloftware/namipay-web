import Link from 'next/link';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' }
];

export default function MenuItems() {
    return (
        <div>
            {
                links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className=" text-[#414052] hover:text-[#AC6DDE] transition-colors"
                    >
                        {link.label}
                    </Link>
                ))
            }
        </div>
    )
}
