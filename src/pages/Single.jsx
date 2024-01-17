import { useState } from 'react'
import SelecPlayers from '@components/SelectPlayers'
import { getSimpleTeamData } from '@utils/getTeamData'

export default function SinglePage () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <h1>1 vs 1</h1>
      <SelecPlayers matchFunction={getSimpleTeamData} setMatches={setMatches} />
      <section className='w-full'>
        <ul className='flex justify-between w-full'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='list-none'>
              <p>{players}</p>
              <img src={`/team-logos/${squad.image}`} alt={squad.name} className='w-20' />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
