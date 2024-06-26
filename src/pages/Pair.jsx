import { useState } from 'react'
// Components
import SortSection from '@components/SortSection'
import DataForm from '@components/DataForm'
// Services
import { getPairTeamData } from '@services/getTeamData'

export default function Pair () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <SortSection title='2 vs 2'>
        <DataForm matchFunction={getPairTeamData} setMatches={setMatches} />
      </SortSection>
      <section className={`flex items-center justify-center ${matches.length > 0 ? 'my-20' : ''}`}>
        <ul className='flex flex-wrap justify-center items-end gap-10'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex flex-col justify-between items-center'>
              {squad
                ? <img
                    src={`/team-logos/${squad.image}`}
                    alt={squad.name}
                    className={`w-24 h-24 object-contain drop-shadow-sm ${
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
