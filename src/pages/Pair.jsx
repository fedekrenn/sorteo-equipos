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
        <ul className='flex flex-wrap justify-center mt-10 mb-10 gap-5 md:flex-nowrap'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex w-[225px] flex-col items-center justify-end'>
              {squad
                ? <img src={`/team-logos/${squad.image}`} alt={squad.name} className='w-24 sm:w-44' />
                : <p className='flex-1 flex items-center text-4xl text-yellow-500 font-bold italic'>Libre</p>}
              <p className='mt-4 text-lg'>{players.join(' - ')}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
