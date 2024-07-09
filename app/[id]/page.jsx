import Link from "next/link";
import { fetchDataId } from "../lib/API"
import Abilities from "../ui/detail/abilities";
import { outfit } from "../ui/fonts";


export default async function Detail({ params }) {
    const agent = await fetchDataId(params.id)
    const fillColor = `#${agent.backgroundGradientColors[2]}`
    const textColor = `#${agent.backgroundGradientColors[0]}`
    return (
        <div className="">
            <div className="flex justify-center">
                <svg width="1440" height="927" viewBox="0 0 1376 927" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:flex relative w-full 2xl:w-auto h-full 2xl:h-auto blur-md overflow-hidden">
                    <path d="M0 80C0 35.8172 35.8172 0 80 0H1296C1340.18 0 1376 35.8172 1376 80V847C1376 891.183 1340.18 927 1296 927H413C368.817 927 333 891.183 333 847V760.5C333 716.317 297.183 680.5 253 680.5H80C35.8172 680.5 0 644.683 0 600.5V80Z" fill={fillColor} />
                </svg>
                <div className="absolute flex h-[550px] lg:h-[700px] 2xl:w-[900px] xl:h-[900px] mt-4 justify-center overflow-hidden blur-[3px] ">
                    {/* imagen del bg */}
                    <img src={agent.background} alt={agent.displayName} className="hidden md:flex object-none scale-105 drop-shadow-[10px_2px_10px_rgba(0,0,0,1)]" />
                </div>
                {/* icono del rol */}
                <img src={agent.role.displayIcon} alt={agent.role.displayName} width={82} className="absolute left-[78%] bottom-[78%] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" />
                {/* imagen del personaje */}
                <img src={agent.bustPortrait} alt={agent.displayName} className="hidden md:flex absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" />
                <img src={agent.bustPortrait} alt={agent.displayName} width={496} height={496} className="flex md:hidden" />
                {/* nombre y rol */}
                <div className="absolute bottom-0 2xl:left-[260px] 2xl:-bottom-0   rounded-2xl p-6 z-30">
                    <h2 className={`${outfit.className} font-semibold text-3xl z-10 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]`}>{agent.role.displayName}</h2>
                    <h1 className='text-[88px] font-cyber z-10 drop-shadow-[8px_2px_2px_rgba(0,0,0,1)]' style={{ color: textColor }}>{agent.displayName}</h1>
                </div>
            </div>
            <div>
                <h2 className="hidden">{agent.description}</h2>
                <h3>Habilidades</h3>
                {/* <Abilities agent={agent} /> */}
            </div>
        </div>
    )
}