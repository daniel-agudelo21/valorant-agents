"use client"
import { useState } from 'react';
import { outfit } from '../fonts';

export default function Abilities({ agent }) {
    const [selectedAbility, setSelectedAbility] = useState(null);
    const bgColor = `#${agent.backgroundGradientColors[1]}`;

    const handleAbility = (ability) => {
        setSelectedAbility(ability);
    };

    return (
        <div className="flex flex-col  mx-[42px] mb-40 mt-4 ">
            <div className="flex gap-4 ">
                {agent.abilities.map((ability) => (
                    <button
                        key={ability.slot}
                        className='border rounded-lg p-1 z-50'
                        style={selectedAbility === ability ? { backgroundColor: bgColor } : {}}
                        onClick={() => handleAbility(ability)}
                    >
                        <img src={ability.displayIcon} alt={ability.displayName} width={62} />
                    </button>
                ))}
            </div>
            {selectedAbility && (
                <div className="mt-8  z-50">
                    <h3 className={` ${outfit.className} text-2xl font-bold`} style={{ color: bgColor }}>{selectedAbility.displayName}</h3>
                    <p className='mt-2'>{selectedAbility.description}</p>
                </div>
            )}
        </div>
    );
}
