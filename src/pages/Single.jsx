import { useState } from 'react'
// Components
import SortSection from '@components/SortSection'
import DataForm from '@components/DataForm'
// Services
import { getSimpleTeamData } from '@services/getTeamData'

export default function SinglePage () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <SortSection title='1 vs 1'>
        <DataForm matchFunction={getSimpleTeamData} setMatches={setMatches} />
      </SortSection>
      <section className={`flex items-center justify-center ${matches.length > 0 ? 'my-20' : ''}`}>
        <ul className='flex flex-wrap justify-center items-end gap-10'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex flex-col justify-between items-center'>
              <img
                src={`/team-logos/${squad.image}`}
                alt={squad.name}
                className={`w-24 h-24 object-contain drop-shadow-sm ${
                  matches.length <= 4
                    ? 'md:w-[200px] md:h-[200px]'
                    : matches.length <= 7
                    ? 'md:w-[100px] md:h-[100px]'
                    : 'md:w-[60px] md:h-[60px]'
                } `}
              />
              <p className='mt-4 text-lg'>{players}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
