import { useState } from 'react'
import { getTwoRandomTeams } from '@services/getTeamData'

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
        <h2 className='text-3xl text-center font-bold'>Partido aleatorio</h2>
        <p>Haz click para seleccionar equipos</p>
        <label>
          <span>Jugar con países</span>
          <input
            type='checkbox'
            id='includeCountriesRandom'
            className='form-checkbox'
            checked={countries}
            onChange={() => setCountries(!countries)}
          />
        </label>
        <button onClick={matchTeams} className='btn w-fit'>Elegir</button>
      </section>
      <ul className='flex flex-wrap justify-center items-end mt-10 mb-10 gap-10'>
        {teams.map(({ name, image }) => (
          <li key={name} className='flex flex-col justify-between items-center'>
            <img src={`/team-logos/${image}`} alt={name} className='w-24 h-24 object-contain sm:w-[200px] sm:h-[200px]' />
            <span className='w-full text-center mt-4 items-end'>{name}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
