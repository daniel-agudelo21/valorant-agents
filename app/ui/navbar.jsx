'use client'
import Image from "next/image";
import { GoHome } from "react-icons/go";
import { LuPaintbrush2 } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    {
        name: 'Inicio',
        href: '/',
        icon: GoHome,
    },
    {
        name: 'Mapas',
        href: '/mapas',
        icon: BsBuildings,
    },
    {
        name: 'Skins',
        href: '/skins',
        icon: LuPaintbrush2,
    },
]

export default function NavBar() {
    const pathname = usePathname()
    return (
        <>  
        <div className="ml-5 mt-8">
            <Image src={`/valorant.svg`} width={51} height={51} />
        </div>
            <nav className="fixed bottom-0 left-0 right-0 z-50 flex flex-row  md:hidden mx-auto bg-[#222121] py-4 justify-evenly items-center">
                {
                    links.map((link) => {
                        const LinkIcon = link.icon
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex flex-col justify-center items-center hover:text-[#F53C43] ${pathname === link.href ? 'text-[#F53C43]' : ''
                                    }`}>
                                <LinkIcon className=' size-9' />
                                <p>{link.name}</p>
                            </Link>
                        )
                    })
                }
            </nav>
        </>
    )
}