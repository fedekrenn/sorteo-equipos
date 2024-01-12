import { useState } from 'react'
import Select from './Select'
import Input from './Input'

export default function SelectPlayers ({ matchFunction, setMatches }) {
  const [playersCount, setPlayersCount] = useState(0)
  const [players, setPlayers] = useState([])
  const [countries, setCountries] = useState(false)

  const handlePlayerChange = (index, name) => {
    const newPlayers = [...players]
    newPlayers[index] = name
    setPlayers(newPlayers)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (playersCount === 0 && players.length === 0) {
      alert('Completa correctamente los campos')
    }

    const newMatches = matchFunction(players, countries)
    setMatches(newMatches)
  }

  const handleReset = () => {
    setPlayersCount(0)
    setPlayers([])
    setMatches([])
  }

  return (
    <section>
      <Select
        setPlayersCount={setPlayersCount}
        playersCount={playersCount}
        handleReset={handleReset}
      />
      <form action='' onSubmit={handleSubmit}>
        {Array.from({ length: playersCount }).map((_, index) => {
          return (
            <Input
              key={index}
              index={index}
              handlePlayerChange={handlePlayerChange}
            />
          )
        })}
        <label>
          <span>Jugar con países</span>
          <input
            type='checkbox'
            className='form-checkbox'
            checked={countries}
            onChange={() => setCountries(!countries)}
          />
        </label>
        <button type='reset' className='btn' onClick={handleReset}>Limpiar</button>
        <button type='submit' className='btn'>Enviar</button>
      </form>
    </section>
  )
}
