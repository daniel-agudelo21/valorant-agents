import Link from "next/link";
import Card from "./card";

export default function Cards({ filteredRole }) {
    return (
        <div className="grid grid-cols-2 mx-auto md:grid-cols-4 xl:grid-cols-6 md:space-x-2">
            {
                filteredRole.map(({ uuid, displayName, fullPortrait, role, backgroundGradientColors}) => (
                    <Link href={`/${uuid}`}>
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
    )
}