'use client'
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const roles = [
    {
        uuid: '',
        name: 'Todos',
        icon: '/iniciador.svg'
    },
    {
        uuid: '1b47567f-8f7b-444b-aae3-b0c634622d10',
        name: 'Iniciador',
        icon: '/iniciador.svg'
    },
    {
        uuid: '5fc02f99-4091-4486-a531-98459a3e95e9',
        name: 'Sentinela',
        icon: '/sentinela.svg'
    },
    {
        uuid: 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4',
        name: 'Duelista',
        icon: '/duelista.svg'
    },
    {
        uuid: '4ee40330-ecdd-4f2f-98a8-eb1243428373',
        name: 'Controlador',
        icon: '/controlador.svg'
    },
]


export default function Filter() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleFilter = (uuid) => {
        const params = new URLSearchParams(searchParams)
        const currentFilter = params.get('role')
        if (currentFilter === uuid) {
            params.delete('role')
        } else {
            params.set('role', uuid)
        }
        replace(`${pathname}?${params.toString()}`)
        console.log(uuid);
    }

    const currentFilter = searchParams.get('role')

    return (
        <div className="flex gap-x-4">
            {
                roles.map((role) => (
                    <div key={role.uuid}>
                        <p>{role.name}</p>
                        <button
                            onClick={() => { handleFilter(role.uuid) }}
                            className={`border rounded-lg p-2 hover:bg-[#F53C43] hover:scale-110 hover:transition-all ${currentFilter === role.uuid || (role.uuid === '' && !currentFilter) ? 'bg-[#F53C43]' : ''
                                }`}>
                            <Image src={role.icon} width={51} height={51}

                            />
                        </button>
                    </div>
                ))
            }
        </div >
    )
}