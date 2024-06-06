
import Link from 'next/link';
import fetchData from './lib/API';

export default async function Home() {
  const agents = await fetchData()  

  return (
    <div>
      <h2>Lista de agentes</h2>
      {
        agents.map((agent) => (
          <div key={agent.uuid}>
            <Link href={`/${agent.uuid}`}>{agent.displayName}</Link>
            <h2>{agent.description}</h2>
            <img src={agent.displayIcon} alt={agent.displayName} width={200} />
          </div>
        ))
      }
    </div>
  );
}
