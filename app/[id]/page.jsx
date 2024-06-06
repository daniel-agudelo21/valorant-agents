import Link from "next/link";
import { fetchDataId } from "../lib/API"


export default async function Detail({ params }) {
    const agent = await fetchDataId(params.id)
    console.log('este es el link:', agent);
    return (
        <div>
            <h1>El id del agente es: {agent.uuid}</h1>
            <h2>{agent.description}</h2>
            <img src={agent.fullPortrait} alt={agent.displayName} width={200} />
            <Link href={'/'}>Volver</Link>
        </div>
    )
}