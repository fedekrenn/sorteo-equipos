import { useState, useEffect } from 'react'
import { Toaster, toast } from 'sonner'
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
    newPlayers[index] = name.toLowerCase()
    setPlayers(newPlayers)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (playersCount === 0 && players.length === 0) {
      toast.info('Completa correctamente los campos')
    }

    const areNamesUnique = players.every((player, index) => {
      return players.indexOf(player) === index
    })

    const areNamesNotEmpty = players.every(player => player.trim() !== '')

    if (!areNamesUnique) {
      toast.info('No puedes repetir nombres')
      return
    }

    if (!areNamesNotEmpty) {
      toast.info('No ingresaste todos los nombres')
      return
    }

    const playersWithTrimmedNames = players.map(player => player.trim())

    try {
      const generatedMatches = matchFunction(playersWithTrimmedNames, includeCountries)
      setMatches(generatedMatches)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleReset = () => {
    setPlayersCount(0)
    setPlayers([])
    setMatches([])
  }

  return (
    <section>
      <Toaster />
      <Select
        setPlayersCount={setPlayersCount}
        playersCount={playersCount}
        handleReset={handleReset}
      />
      <form action='' onSubmit={handleSubmit} className='flex flex-col'>
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
        <div className='flex gap-2'>
          <button type='reset' className='btn w-fit' onClick={handleReset}>Limpiar</button>
          <button type='submit' className='btn w-fit'>Enviar</button>
        </div>
      </form>
    </section>
  )
}
