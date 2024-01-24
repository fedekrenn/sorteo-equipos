import { useState } from 'react'
import { getTwoRandomTeams } from '@utils/getTeamData'

export default function RandomTeams () {
  const [teams, setTeams] = useState([])
  const [countries, setCountries] = useState(false)

  const matchTeams = () => {
    const teams = getTwoRandomTeams(countries)
    setTeams(teams)
  }

  return (
    <main>
      <h1>Partido aleatorio</h1>
      <h2>Haz click para seleccionar equipos</h2>
      <label>
        <span>Jugar con países</span>
        <input
          type='checkbox'
          className='form-checkbox'
          checked={countries}
          onChange={() => setCountries(!countries)}
        />
      </label>
      <button onClick={matchTeams} className='btn'>Elegir</button>
      <ul className='flex flex-wrap justify-center items-end mt-14 mb-14 gap-10 min-h-[225px]'>
        {teams.map(({ name, image }) => (
          <li key={name} className='flex flex-col justify-between items-center w-52'>
            <img src={`/team-logos/${image}`} alt={name} className='w-24 sm:w-44 flex-1' />
            <span className='w-full text-center mt-4 items-end'>{name}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
