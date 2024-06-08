import Link from "next/link";
import Card from "./card";

export default function Cards({ filteredRole, query, filterRole }) {
    const lowerCaseQuery = query.toLowerCase();

    // Primero aplicamos el filtro de búsqueda
    const searchAgent = lowerCaseQuery === '' ? filteredRole
        : filteredRole.filter((agent) => agent.displayName.toLowerCase().includes(lowerCaseQuery));

    // Luego aplicamos el filtro de rol sobre los resultados de la búsqueda
    const filteredAgents = filterRole === '' ? searchAgent 
        : searchAgent.filter((agent) => agent.role.uuid.includes(filterRole));

    return (
        <div className="grid grid-cols-2 mx-auto md:grid-cols-4 xl:grid-cols-6 md:space-x-2">
            {
                filteredAgents.map(({ uuid, displayName, fullPortrait, role, backgroundGradientColors }) => (
                    <Link href={`/${uuid}`} key={uuid}>
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
