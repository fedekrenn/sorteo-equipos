import { useState } from 'react'
import { getPairTeamData } from '@services/getTeamData'
import SelecPlayers from '@components/SelectPlayers'

export default function Pair () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <h1>2 vs 2</h1>
      <SelecPlayers matchFunction={getPairTeamData} setMatches={setMatches} />
      <section className='w-full'>
        <ul className='flex flex-wrap justify-center items-end mt-10 mb-10 gap-10'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex flex-col justify-between items-center'>
              {squad
                ? <img
                    src={`/team-logos/${squad.image}`}
                    alt={squad.name}
                    className={`w-24 h-24 object-contain ${
                    matches.length <= 4
                      ? 'md:w-[200px] md:h-[200px]'
                      : 'md:w-[100px] md:h-[100px]'
                  } `}
                  />
                : (
                  <p className='flex-1 flex items-center text-4xl text-yellow-500 font-bold italic'>
                    Libre
                  </p>
                  )}
              <p className='mt-4 text-base text-center'> {players.join(' - ')}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
