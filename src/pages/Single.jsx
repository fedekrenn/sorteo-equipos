import { useState } from 'react'
import Title from '@components/Title'
import { getSimpleTeamData } from '@services/getTeamData'

export default function SinglePage () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <Title text='1 vs 1' matchFunction={getSimpleTeamData} setMatches={setMatches} />
      <section className='w-full'>
        <ul className='flex flex-wrap justify-center items-end mt-10 mb-10 gap-10'>
          {matches.map(({ players, squad }) => (
            <li key={players} className='flex flex-col justify-between items-center'>
              <img
                src={`/team-logos/${squad.image}`}
                alt={squad.name}
                className={`w-24 h-24 object-contain ${
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
