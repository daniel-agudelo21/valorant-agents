import fetchData from './lib/API';
import Cards from './ui/home/cards';
import NavBar from './ui/navbar';
import SearchBar from './ui/search';

export default async function Home() {
  const agents = await fetchData()
  const filteredAgents = agents.filter((agent) => agent.isPlayableCharacter)
  const filteredRole = filteredAgents.filter((agentFiltered) => agentFiltered.role.uuid === '1b47567f-8f7b-444b-aae3-b0c634622d10' || '5fc02f99-4091-4486-a531-98459a3e95e9' || 'dbe8757e-9e92-4ed4-b39f-9dfc589691d4' || '4ee40330-ecdd-4f2f-98a8-eb1243428373' )
  
  return (
    <div className='flex flex-col mb-20'>
      <SearchBar/>
      <h2 className='hidden md:block'>Lista de agentes</h2>
      <Cards filteredRole={filteredRole}/>
    </div>
  );
}
