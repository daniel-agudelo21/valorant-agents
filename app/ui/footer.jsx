import { FaArrowUp } from "react-icons/fa6";
export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="hidden md:flex flex-row justify-evenly items-center  w-full text-white/50 bg-[#222121]/55  rounded-lg m-auto shadow-md py-6">
            <h2>© {currentYear} <a href="https://daniel-desarrollo-web.netlify.app/" target="_blank" className="hover:underline hover:text-white">Daniel Agudelo.</a> Todos los derechos reservados.</h2>
            <a className="flex flex-row gap-1 hover:underline px-2 hover:text-white" href="#top">
                <FaArrowUp />
                <p>Inicio</p>
            </a>
        </footer>
    )
}