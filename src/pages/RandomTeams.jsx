import { useState } from 'react'
import { getTwoRandomTeams } from '../utils/getTeamData'

export default function RandomTeams () {
  const [teams, setTeams] = useState([])
  const [countries, setCountries] = useState(false)

  const matchTeams = () => {
    const teams = getTwoRandomTeams(countries)
    setTeams(teams)
  }

  return (
    <main>
      <h1>Partido alegatorio</h1>
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
      <ul className='flex justify-between items-start mt-14 mb-14 gap-10'>
        {teams.map(team => (
          <li key={team.name} className='flex flex-col justify-center items-center'>
            <img src={`/team-logos/${team.image}`} alt={team.name} className='w-32 h-32' />
            <span className='w-20 text-center mt-4'>{team.name}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
