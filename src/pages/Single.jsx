import { useState } from 'react'
import SelecPlayers from '@components/SelectPlayers'
import { getSimpleTeamData } from '@services/getTeamData'

export default function SinglePage () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <h1>1 vs 1</h1>
      <SelecPlayers matchFunction={getSimpleTeamData} setMatches={setMatches} />
      <section className='w-full'>
        <ul className='flex flex-wrap justify-center m-10 gap-10 lg:flex-nowrap'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex flex-col items-center justify-end max-w-[200px] w-auto'>
              <img src={`/team-logos/${squad.image}`} alt={squad.name} className='w-16 sm:w-24 lg:w-44 object-contain flex-1' />
              <p className='mt-4 text-lg'>{players}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
