import { useState } from 'react'
import { getTwoRandomTeams } from '@services/getTeamData'
import { Label, Checkbox } from 'flowbite-react'

export default function RandomTeams () {
  const [teams, setTeams] = useState([])
  const [countries, setCountries] = useState(false)

  const matchTeams = () => {
    const teams = getTwoRandomTeams(countries)
    setTeams(teams)
  }

  return (
    <main>
      <section className='flex flex-col max-w-[500px] mx-auto w-full'>
        <h2 className='text-3xl text-center font-bold mb-3'>Partido aleatorio</h2>
        <div className='flex items-center gap-2 my-5 mx-auto'>
          <Checkbox
            id='includeCountriesRandom'
            checked={countries}
            onChange={() => setCountries(!countries)}
          />
          <Label htmlFor='includeCountriesRandom' value='¿Incluir países?' className='text-slate-100' />
        </div>
        <button onClick={matchTeams} className='btn w-fit mx-auto'>Elegir</button>
      </section>
      <section className={`flex items-center justify-center ${teams.length > 0 ? 'min-h-[400px]' : ''}`}>
        <ul className='flex flex-wrap justify-center items-end gap-10'>
          {teams.map(({ name, image }) => (
            <li key={name} className='flex flex-col justify-between items-center'>
              <img src={`/team-logos/${image}`} alt={name} className='w-32 h-32 object-contain sm:w-[200px] sm:h-[200px]' />
              <span className='w-full text-center mt-4 items-end'>{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
