import { fetchDataId } from "../../lib/API"
import Abilities from "../../ui/detail/abilities";
import { outfit } from "../../ui/fonts";
import Image from "next/image";

export const metadata = {
    title: 'Detalle de agente'
}

export default async function Detail({ params }) {
    const agent = await fetchDataId(params.id)
    const fillColor = `#${agent.backgroundGradientColors[2]}`
    const textColor = `#${agent.backgroundGradientColors[0]}`
    return (
        <div className="flex flex-col justify-center mx-auto max-w-[1920px]">
            <div className="relative flex justify-center 2lg:h-[900px]">
                <svg width="1440" height="927" viewBox="0 0 1376 927" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:flex w-full 2xl:w-auto h-full 2xl:h-auto blur-md overflow-hidden">
                    <path d="M0 80C0 35.8172 35.8172 0 80 0H1296C1340.18 0 1376 35.8172 1376 80V847C1376 891.183 1340.18 927 1296 927H413C368.817 927 333 891.183 333 847V760.5C333 716.317 297.183 680.5 253 680.5H80C35.8172 680.5 0 644.683 0 600.5V80Z" fill={fillColor} />
                </svg>

                <div className="absolute flex h-full md:h-[450px] md:w-[410px] lg:h-[635px] lg:w-[500px] 2lg:h-[870px] 2lg:w-[800px] xl:h-[800px] 2xl:h-[900px] 2xl:w-[900px] mt-4 justify-center overflow-hidden blur-[3px]">
                    {/* imagen del bg */}
                    <Image src={agent.background} alt={agent.displayName} width={646} height={945} className="hidden md:flex object-none md:object-cover lg:object-cover 2lg:object-cover  xl:object-none xl:scale-105 drop-shadow-[10px_2px_10px_rgba(0,0,0,1)]" />
                </div>
                {/* icono del rol */}
                <Image src={agent.role.displayIcon} alt={agent.role.displayName} width={82} height={82} className="absolute hidden lg:block  lg:left-[83%] lg:top-24 2xl:left-[76%] 2xl:bottom-[78%] drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" />
                {/* imagen del personaje */}
                <Image src={agent.bustPortrait} alt={agent.displayName} width={1920} height={1744} priority={true} className="hidden md:flex absolute drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]" />
                <div style={{ background: fillColor }} className="">
                    <Image src={agent.bustPortrait} alt={agent.displayName} width={496} height={496} priority={true} className="flex items-end md:hidden drop-shadow-[2px_2px_2px_rgba(0,0,0,1)] " />
                </div>
                {/* nombre y rol */}
                <div className="absolute top-[62%] left-8 md:top-[80%] lg:left-3 lg:top-[75%] 2lg:top-[75%] xl:left-8 xl:top-[75%] 2xl:left-[260px] 2xl:top-[78%] lg:p-6 z-30">
                    <div className="flex flex-row items-center gap-x-4">
                        <h2 className={`${outfit.className} text-[18px] font-semibold lg:text-2xl 2lg:text-3xl z-10 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]`}>{agent.role.displayName}</h2>
                        <Image src={agent.role.displayIcon} alt={agent.role.displayName} width={22} height={22} className="block lg:hidden drop-shadow-[5px_2px_2px_rgba(0,0,0,1)] " />
                    </div>
                    <h1 className='text-[40px] lg:text-[55px] 2lg:text-[88px] font-cyber z-10 drop-shadow-[8px_2px_2px_rgba(0,0,0,1)]' style={{ color: textColor }}>{agent.displayName}</h1>
                </div>
            </div>
            <div className="2xl:mx-44 md:mt-44">
                <h3 className={`${outfit.className} text-[23px] md:text-[43px] mt-4 md:mt-[110px] font-bold mx-[42px]`}>Habilidades</h3>
                <Abilities agent={agent} />
            </div>
        </div>
    )
}
