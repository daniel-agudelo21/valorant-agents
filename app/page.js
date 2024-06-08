import fetchData from './lib/API';
import Filter from './ui/filter';
import Cards from './ui/home/cards';
import SearchBar from './ui/search';

export default async function Home({ searchParams }) {
  const agents = await fetchData()
  const filteredAgents = agents.filter((agent) => agent.isPlayableCharacter)
  const filteredRole = filteredAgents.filter((agentFiltered) => agentFiltered.role.uuid === '1b47567f-8f7b-444b-aae3-b0c634622d10' || '5fc02f99-4091-4486-a531-98459a3e95e9' || 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4' || '4ee40330-ecdd-4f2f-98a8-eb1243428373')

  const query = searchParams?.query || ''
  const filterRole = searchParams?.role || ''



  return (
    <main className='flex flex-col mb-24'>
      <h2 className='hidden md:block'>Agentes</h2>
      <div className='hidden md:flex md:flex-row md:justify-evenly  items-center mb-4'>
        <SearchBar placeholder='Buscar agente...' />
        <Filter />
      </div>
      <div className='flex flex-col md:hidden'>
        <SearchBar placeholder='Buscar agente...' />
      </div>
      <Cards filteredRole={filteredAgents} query={query} filterRole={filterRole}/>
    </main>
  );
}
