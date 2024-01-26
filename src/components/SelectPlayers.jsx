import { useState, useEffect } from 'react'
import Select from './Select'
import Input from './Input'

export default function SelectPlayers ({ matchFunction, setMatches }) {
  const [playersCount, setPlayersCount] = useState(0)
  const [players, setPlayers] = useState([])
  const [includeCountries, setIncludeCountries] = useState(false)

  useEffect(() => {
    const handleReduce = quantity => {
      const newPlayers = [...players]
      newPlayers.splice(-quantity)
      setPlayers(newPlayers)
    }

    if (playersCount < players.length) {
      const difference = players.length - playersCount
      handleReduce(difference)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playersCount])

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

    const areNamesUnique = players.every((player, index) => {
      return players.indexOf(player) === index
    })

    const areNamesNotEmpty = players.every(player => player.trim() !== '')

    if (!areNamesUnique) {
      alert('No puedes repetir nombres')
      return
    }

    if (!areNamesNotEmpty) {
      alert('No ingresaste todos los nombres')
      return
    }

    const playersWithTrimmedNames = players.map(player => player.trim())

    try {
      const generatedMatches = matchFunction(playersWithTrimmedNames, includeCountries)
      setMatches(generatedMatches)
    } catch (error) {
      alert(error)
    }
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
            id='includeCountries'
            className='form-checkbox'
            checked={includeCountries}
            onChange={() => setIncludeCountries(!includeCountries)}
          />
        </label>
        <button type='reset' className='btn' onClick={handleReset}>Limpiar</button>
        <button type='submit' className='btn'>Enviar</button>
      </form>
    </section>
  )
}
