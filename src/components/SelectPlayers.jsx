import { useState } from 'react'
import Select from './Select'
import Input from './Input'

// eslint-disable-next-line react/prop-types
export default function SelectPlayers ({ matchFunction }) {
  const [playersCount, setPlayersCount] = useState(0)
  const [players, setPlayers] = useState([])
  const [matches, setMatches] = useState([])

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
    const newMatches = matchFunction(players)
    setMatches(newMatches)
  }

  const handleReset = () => {
    setPlayersCount(0)
    setPlayers([])
  }

  return (
    <>
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
        <button type='reset' className='btn' onClick={handleReset}>Limpiar</button>
        <button type='submit' className='btn'>Enviar</button>
      </form>
      {JSON.stringify(matches)}
    </>
  )
}
