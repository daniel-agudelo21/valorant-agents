'use client'
import { MdSearch } from "react-icons/md";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar({ placeholder }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((event) => {
        const params = new URLSearchParams(searchParams)
        if (event) {
            params.set('query', event)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
        console.log(event);
    }, 300)
    return (
        <div className="mx-auto md:mx-0 relative my-10  max-w-[250px]">
            <div className="absolute">
                <MdSearch className="absolute inset-x-[220px] lg:inset-x-[330px] lg:right-0 pr-3 flex items-center pointer-events-none text-gray-400 w-10 h-10" />
            </div>
            <input type="text"
                className="peer block pl-5 w-[250px] lg:w-[370px] h-9 rounded-md text-sm text-black "
                placeholder={placeholder}
                onChange={(event) => { handleSearch(event.target.value) }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}