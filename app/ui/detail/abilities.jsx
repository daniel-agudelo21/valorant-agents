"use client"
export default function Abilities({ agent }) {
    const color = agent.backgroundGradientColors[1]
    const handleAbility = (slot) => {

    }
    return (
        <div>
            {
                agent.abilities.map((ability) => (
                    <article key={ability.slot}>
                        <button className="border rounded-lg p-1"
                            onClick={() => { handleAbility(ability.slot) }}
                        >
                            <img src={ability.displayIcon} alt={ability.displayName} width={45} />
                        </button>
                        <h3 className={`text-[#${color}]`}>{ability.displayName}</h3>
                        <p>{ability.description}</p>
                    </article>
                ))
            }
        </div>
    )
}