'use client'
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const roles = [
    {
        uuid: '',
        name: 'Todos',
        icon: '/valorant-icon.svg'
    },
    {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        name: 'Iniciadores',
        icon: '/iniciador.svg'
    },
    {
        uuid: '5fc02f99-4091-4486-a531-98459a3e95e9',
        name: 'Centinelas',
        icon: '/sentinela.svg'
    },
    {
        uuid: 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4',
        name: 'Duelistas',
        icon: '/duelista.svg'
    },
    {
        uuid: '4ee40330-ecdd-4f2f-98a8-eb1243428373',
        name: 'Controladores',
        icon: '/controlador.svg'
    },
]


export default function Filter() {
    const [selectedRoleName, setSelectedRoleName] = useState('Todos')
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleFilter = (uuid) => {
        const params = new URLSearchParams(searchParams)
        const currentFilter = params.get('role')
        if (currentFilter === uuid) {
            params.delete('role')
            setSelectedRoleName('Todos')
        } else {
            const rol = roles.find((role) => role.uuid === uuid)
            setSelectedRoleName(rol ? rol.name : 'Todos')
            params.set('role', uuid)
        }
        replace(`${pathname}?${params.toString()}`)

    }

    const currentFilter = searchParams.get('role')

    useEffect(() => {
        const rol = roles.find((role) => role.uuid === currentFilter)
        setSelectedRoleName(rol ? rol.name : 'Todos')
    }, [currentFilter])
    return (
        <div className="flex flex-col items-center">
            <div className="flex relative gap-x-2 md:gap-x-4 ">
                {
                    roles.map((role) => (
                        <div key={role.uuid}>
                            <button
                                onClick={() => { handleFilter(role.uuid) }}
                                disabled={currentFilter === role.uuid || (role.uuid === '' && !currentFilter)}
                                className={`rounded-lg p-2 hover:bg-[#F53C43] hover:scale-110 hover:transition-all drop-shadow-[5px_2px_2px_rgba(0,0,0,1)] ${currentFilter === role.uuid || (role.uuid === '' && !currentFilter) ? 'bg-[#F53C43]' : ''
                                    }`}>
                                <Image src={role.icon} width={40} height={40} alt={role.name} name={role.name}
                                    className="2lg:size-12 drop-shadow-[5px_2px_2px_rgba(0,0,0,1)]"
                                />
                            </button>
                        </div>
                    ))
                }
            </div>
            <div className="flex relative justify-center items-center mt-6 md:absolute md:left-0 md:right-0 md:top-40">
                <p className="text-lg font-semibold md:text-3xl">{selectedRoleName}</p>
            </div>
        </div >
    )
}