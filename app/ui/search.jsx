import { MdSearch } from "react-icons/md";

export default function SearchBar() {
    return (
        <div className="mx-auto relative my-10">
            <div className="absolute">
                <MdSearch className="absolute inset-x-[330px] right-0 pr-3 flex items-center pointer-events-none text-gray-400 w-10 h-10" />
            </div>
            <input type="text" placeholder="Buscar agente..." className="px-2 w-[370px] h-9 rounded-md text-black" />
        </div>
    )
}