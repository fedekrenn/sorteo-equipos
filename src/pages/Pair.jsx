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
        <ul className='flex justify-between w-full'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='list-none'>
              <ul>
                {players.map(player => (
                  <li key={player}>{player}</li>
                ))}
              </ul>
              {squad
                ? <img src={`/team-logos/${squad.image}`} alt={squad.name} className='w-20' />
                : <p className='font-bold text-cyan-700'>Libre</p>}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
