import Link from "next/link";
import Card from "./card";

export default function Cards({ playableAgents, query, filterRole }) {
    const lowerCaseQuery = query.toLowerCase();

    // Primero aplicamos el filtro de búsqueda
    const searchAgent = lowerCaseQuery === '' ? playableAgents
        : playableAgents.filter((agent) => agent.displayName.toLowerCase().includes(lowerCaseQuery));

    // Luego aplicamos el filtro de rol sobre los resultados de la búsqueda
    const filteredAgents = filterRole === '' ? searchAgent 
        : searchAgent.filter((agent) => agent.role.uuid === filterRole);

    return (
        <div className="grid grid-cols-2 mx-auto md:grid-cols-4 xl:grid-cols-6 md:space-x-2 md:mt-16">
            {
                filteredAgents.map(({ uuid, displayName, fullPortrait, role, backgroundGradientColors }) => (
                    <Link href={`/agente/${uuid}`} key={uuid}>
                        <Card
                            id={uuid}
                            name={displayName}
                            image={fullPortrait}
                            role={role}
                            color={backgroundGradientColors}
                        />
                    </Link>
                ))
            }
        </div>
    );
}
