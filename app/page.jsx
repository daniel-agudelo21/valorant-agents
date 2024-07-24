import fetchData from './lib/API';
import Filter from './ui/filter';
import Cards from './ui/home/cards';
import SearchBar from './ui/search';

export default async function Home({ searchParams }) {
  const agents = await fetchData()
  const playableAgents = agents.filter((agent) => agent.isPlayableCharacter)

  const query = searchParams?.query || ''
  const filterRole = searchParams?.role || ''



  return (
    <main className='flex flex-col mb-24 md:mb-0 '>
      <div className='md:flex md:flex-row md:justify-evenly  items-center mb-4'>
        <SearchBar placeholder='Buscar agente...' />
        <Filter />
      </div>
      <Cards playableAgents={playableAgents} query={query} filterRole={filterRole} />
    </main>
  );
}
