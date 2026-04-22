import { useState, useEffect, useRef } from 'react'
// Components
import Select from '@components/Select'
import Input from '@components/Input'
// Libraries
import { toast } from 'sonner'
import { Toaster } from '@/components/ui/sonner'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
    <Card className='arcade-card border-white/15 bg-black/55 text-white backdrop-blur-xl'>
      <CardContent className='pt-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
          <div className='mx-auto my-2 flex items-center gap-2'>
            <Checkbox
              id='includeCountries'
              checked={includeCountries}
              onCheckedChange={(checked) => setIncludeCountries(Boolean(checked))}
              className='border-white/30 bg-black/50'
            />
            <Label
              htmlFor='includeCountries'
              className='cursor-pointer text-sm font-medium text-slate-200'
            >
              Incluir países (opcional)
            </Label>
          </div>
          <div className='mx-auto flex flex-wrap items-center justify-center gap-3'>
            {isDisabled
              ? (
                <Button
                  type='button'
                  variant='secondary'
                  className='h-11 rounded-xl border border-white/10 bg-slate-600 px-5 text-base font-semibold text-white hover:bg-slate-600'
                  onClick={() => toast.info('¡Esperá unos segundos antes de volver a sortear!')}
                >
                  Sortear
                </Button>
                )
              : (
                <Button
                  type='submit'
                  className='h-11 rounded-xl bg-white px-5 text-base font-semibold text-[#12091f] transition hover:bg-slate-200'
                >
                  Sortear
                </Button>
                )}
            <Button
              type='reset'
              variant='outline'
              className='h-11 rounded-xl border-white/30 bg-transparent px-5 text-base font-semibold text-white hover:bg-white/10'
              onClick={handleReset}
            >
              Limpiar
            </Button>
            <button
              ref={buttonRef}
              type='button'
              tabIndex={-1}
              aria-hidden='true'
              className='fixed left-0 bottom-0 -z-10 h-px w-px opacity-0'
            />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
