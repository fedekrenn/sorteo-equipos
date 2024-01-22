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
      <ul className='flex justify-center items-end mt-14 mb-14 gap-10 min-h-[225px]'>
        {teams.map(team => (
          <li key={team.name} className='flex flex-col justify-between items-center w-52'>
            <img src={`/team-logos/${team.image}`} alt={team.name} className='w-32 flex-1' />
            <span className='w-full text-center mt-4 items-end'>{team.name}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
