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
        <div className=" relative mt-12">

            <nav className="fixed bottom-0 left-0 right-0 z-50 flex flex-row  md:hidden mx-auto bg-[#222121] py-4 pt-6 rounded-tl-[30px] rounded-tr-[30px] justify-evenly items-center">
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
            <nav className="hidden md:block md:fixed md:top-0 md:left-0 md:right-0 md:space-x-4 z-50 md:bg-[#222121]/55 backdrop-blur-sm">
                <div className="flex justify-between items-center pl-5 pr-5">
                    <div className="flex items-center">
                        <Image src={`/valorant.svg`} width={51} height={51} />
                    </div>
                    <div className="flex-1 flex justify-center gap-x-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}