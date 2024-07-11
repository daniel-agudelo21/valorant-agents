"use client"
import { useState } from 'react';
import { outfit } from '../fonts';

export default function Abilities({ agent }) {
    const [selectedAbility, setSelectedAbility] = useState(agent.abilities[0]);
    const bgColor = `#${agent.backgroundGradientColors[1]}`;

    const handleAbility = (ability) => {
        setSelectedAbility(ability);
    };

    return (
        <div className='flex mx-[42px] mb-40 mt-4 lg:mt-[45px] justify-between '>

            <div className="flex flex-col lg:w-[45%] ">
                <div className="flex gap-4  ">
                    {agent.abilities.map((ability) => (
                        <button
                            key={ability.slot}
                            className=' rounded-lg p-1 z-40 drop-shadow-[5px_2px_2px_rgba(0,0,0,1)]'
                            style={selectedAbility === ability ? { backgroundColor: bgColor } : {}}
                            onClick={() => handleAbility(ability)}
                        >
                            <img src={ability.displayIcon} alt={ability.displayName} width={62}  className='drop-shadow-[5px_2px_2px_rgba(0,0,0,1)]'/>
                        </button>
                    ))}
                </div>
                {/* Descripcion habilidad */}
                {selectedAbility && (
                    <div className="mt-8  z-30 drop-shadow-[5px_2px_2px_rgba(0,0,0,1)] md:min-h-[240px] ">
                        <h3 className={` ${outfit.className} md:text-2xl font-bold`} style={{ color: bgColor }}>{selectedAbility.displayName}</h3>
                        <p className='mt-2 text-[10px] md:text-base'>{selectedAbility.description}</p>
                    </div>
                )}
            </div>
            {/* Descripcion del agente */}
            <div className='hidden lg:flex justify-end z-30 lg:-mt-[110px] drop-shadow-[5px_2px_2px_rgba(0,0,0,1)]'>
                <p className={`${outfit.className} text-2xl 2lg:text-3xl text-end max-w-md 2lg:max-w-lg`}>{agent.description}</p>
            </div>
        </div>
    );
}
