import { useState } from 'react'
import Select from '../components/Select'
import Input from '../components/Input'

export default function Single () {
  const [playersCount, setPlayersCount] = useState(0)
  const [players, setPlayers] = useState([])

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
    console.log(players)
  }

  const handleReset = () => {
    setPlayersCount(0)
    setPlayers([])
  }

  return (
    <main>
      <h1>1 vs 1</h1>
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
      {JSON.stringify(players)}
    </main>
  )
}
