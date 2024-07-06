import Link from "next/link";
import { fetchDataId } from "../lib/API"
import { IoChevronBack } from "react-icons/io5";
import Abilities from "../ui/detail/abilities";



export default async function Detail({ params }) {
    const agent = await fetchDataId(params.id)
    const fillColor = `#${agent.backgroundGradientColors[2]}`
    return (
        <div className="mx-auto">
            <Link href={'/'}><IoChevronBack className=" hover:scale-150" /></Link>
            <div className="flex relative">
                <svg width="1376" height="927" viewBox="0 0 1376 927" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
                    <path d="M0 80C0 35.8172 35.8172 0 80 0H1296C1340.18 0 1376 35.8172 1376 80V847C1376 891.183 1340.18 927 1296 927H413C368.817 927 333 891.183 333 847V760.5C333 716.317 297.183 680.5 253 680.5H80C35.8172 680.5 0 644.683 0 600.5V80Z" fill={fillColor} />
                </svg>
                <img src={agent.background} alt={agent.displayName} className="absolute"/>
                <h1>{agent.displayName}</h1>
                <div className="flex items-center">
                    <h2>{agent.role.displayName}</h2>
                    <img src={agent.role.displayIcon} alt={agent.role.displayName} width={20} />
                </div>
                <img src={agent.bustPortrait} alt={agent.displayName} width={1747} height={1747} className="hidden xl:flex absolute" />
                <img src={agent.bustPortrait} alt={agent.displayName} width={496} height={496} className="flex xl:hidden" />
            </div>
            <div>
                <h2 className="hidden">{agent.description}</h2>
                <h3>Habilidades</h3>
                {/* <Abilities agent={agent} /> */}
            </div>
        </div>
    )
}