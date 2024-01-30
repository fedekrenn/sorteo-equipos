import { useState } from 'react'
import { getPairTeamData } from '@utils/getTeamData'
import SelecPlayers from '@components/SelectPlayers'

export default function Pair () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <h1>2 vs 2</h1>
      <SelecPlayers matchFunction={getPairTeamData} setMatches={setMatches} />
      <section className='w-full'>
        <ul className='flex flex-wrap justify-center m-10 gap-10 lg:flex-nowrap'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex flex-col items-center justify-end max-w-[200px] w-auto'>
              {squad
                ? <img src={`/team-logos/${squad.image}`} alt={squad.name} className='w-16 sm:w-24 lg:w-44 object-contain flex-1' />
                : <p className='flex-1 flex items-center text-4xl text-yellow-500 font-bold italic'>Libre</p>}
              <p className='mt-4 text-base text-center'>{players.join(' - ')}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
