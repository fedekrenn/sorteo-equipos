import { useState, useEffect, useRef } from 'react'
// Components
import Select from '@components/Select'
import Input from '@components/Input'
// Libraries
import { Toaster, toast } from 'sonner'
import { Label, Checkbox } from 'flowbite-react'
import confetti from 'canvas-confetti'

export default function DataForm ({ matchFunction, setMatches }) {
  const [playersCount, setPlayersCount] = useState(0)
  const [players, setPlayers] = useState([])
  const [includeCountries, setIncludeCountries] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const buttonRef = useRef(null)

  useEffect(() => {
    const handleReduce = (quantity) => {
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

  useEffect(() => {
    if (isDisabled) {
      setTimeout(() => {
        setIsDisabled(false)
      }, 5000)
    }
  }, [isDisabled])

  const handlePlayerChange = (index, name) => {
    const newPlayers = [...players]
    newPlayers[index] = name.toLowerCase()
    setPlayers(newPlayers)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (playersCount === 0 && players.length === 0) {
      return toast.info('Completa correctamente los campos')
    }

    if (players.some((player) => player.length < 3)) {
      return toast.info('Los nombres deben tener al menos 3 caracteres')
    }

    const areNamesUnique = players.every((player, index) => {
      return players.indexOf(player) === index
    })

    const areNamesNotEmpty = players.every((player) => player.trim() !== '')

    if (!areNamesUnique) {
      toast.info('No puedes repetir nombres')
      return
    }

    if (!areNamesNotEmpty) {
      toast.info('No ingresaste todos los nombres')
      return
    }

    const playersWithTrimmedNames = players.map((player) => player.trim())

    try {
      const generatedMatches = matchFunction(
        playersWithTrimmedNames,
        includeCountries
      )
      setMatches(generatedMatches)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      buttonRef.current.focus()
      setIsDisabled(true)
      setTimeout(() => {
        // Scroll to the bottom of the page to see the teams
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
      }, 150)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleReset = () => {
    setPlayersCount(0)
    setPlayers([])
    setMatches([])
    setIsDisabled(false)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 my-3'>
      <Toaster />
      <Select
        setPlayersCount={setPlayersCount}
        playersCount={playersCount}
        handleReset={handleReset}
      />
      {Array.from({ length: playersCount }).map((_, index) => {
        return (
          <Input
            key={index}
            index={index}
            handlePlayerChange={handlePlayerChange}
          />
        )
      })}
      <div className='flex items-center gap-2 my-3 mx-auto'>
        <Checkbox
          id='includeCountries'
          checked={includeCountries}
          onChange={() => setIncludeCountries(!includeCountries)}
        />
        <Label
          htmlFor='includeCountries'
          value='¿Incluir países? (Opcional)'
          className='text-slate-100'
        />
      </div>
      <div className='flex gap-2 mx-auto'>
        {isDisabled
          ? (
            <button
              type='button'
              className='btn w-fit bg-slate-600 hover:bg-slate-600 hover:cursor-not-allowed'
              onClick={() => toast.info('¡Espera unos segundos antes de volver a sortear!')}
            >
              Sortear
            </button>
            )
          : (
            <button type='submit' className='btn w-fit bg-[#f3ecec]'>
              Sortear
            </button>
            )}
        <button type='reset' className='btn reset w-fit' onClick={handleReset}>
          Limpiar
        </button>
        {/* The following hide button is used to lose focus after submitting, so in mobile devices
          it will close the keyboard */}
        <button
          ref={buttonRef}
          style={{ position: 'fixed', bottom: 0, left: 0, zIndex: -1 }}
        />
      </div>
    </form>
  )
}
