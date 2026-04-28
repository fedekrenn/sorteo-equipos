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
  const [fieldErrors, setFieldErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')

  const statusRef = useRef(null)
  const formRef = useRef(null)

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
    setFieldErrors((prev) => {
      if (prev[index] == null) return prev
      const next = { ...prev }
      delete next[index]
      return next
    })
  }

  const focusFirstInvalidField = (errors) => {
    const firstInvalidIndex = Object.keys(errors)
      .map(Number)
      .sort((a, b) => a - b)[0]

    if (firstInvalidIndex == null) return

    const target = formRef.current?.querySelector(
      `[data-player-input-index="${firstInvalidIndex}"]`
    )
    target?.focus()
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setStatusMessage('')
    setFieldErrors({})

    if (playersCount === 0 && players.length === 0) {
      setStatusMessage('Elegí la cantidad de jugadores para continuar.')
      return toast.info('Completa correctamente los campos')
    }

    const emptyErrors = {}
    const lengthErrors = {}

    Array.from({ length: playersCount }).forEach((_, index) => {
      const player = players[index] ?? ''
      const trimmedPlayer = player.trim()
      if (trimmedPlayer === '') {
        emptyErrors[index] = 'No ingresaste el nombre del jugador.'
      } else if (trimmedPlayer.length < 3) {
        lengthErrors[index] = 'El nombre debe tener al menos 3 caracteres.'
      }
    })

    if (Object.keys(emptyErrors).length > 0) {
      setFieldErrors(emptyErrors)
      setStatusMessage('Hay campos vacios. Completalos para poder sortear.')
      focusFirstInvalidField(emptyErrors)
      toast.info('No ingresaste todos los nombres')
      return
    }

    if (Object.keys(lengthErrors).length > 0) {
      setFieldErrors(lengthErrors)
      setStatusMessage('Hay nombres demasiado cortos. Corregilos para continuar.')
      focusFirstInvalidField(lengthErrors)
      toast.info('Los nombres deben tener al menos 3 caracteres')
      return
    }

    const playersWithTrimmedNames = Array.from({ length: playersCount }, (_, index) => {
      return (players[index] ?? '').trim()
    })

    const duplicateErrors = {}
    const normalizedPlayerIndexes = new Map()
    playersWithTrimmedNames.forEach((player, index) => {
      const indexes = normalizedPlayerIndexes.get(player) ?? []
      indexes.push(index)
      normalizedPlayerIndexes.set(player, indexes)
    })

    normalizedPlayerIndexes.forEach((indexes) => {
      if (indexes.length > 1) {
        indexes.forEach((index) => {
          duplicateErrors[index] = 'Este nombre esta repetido. Usa un nombre unico.'
        })
      }
    })

    if (Object.keys(duplicateErrors).length > 0) {
      setFieldErrors(duplicateErrors)
      setStatusMessage('No podes repetir nombres. Corregi los jugadores duplicados.')
      focusFirstInvalidField(duplicateErrors)
      toast.info('No puedes repetir nombres')
      return
    }

    try {
      const generatedMatches = matchFunction(
        playersWithTrimmedNames,
        includeCountries
      )
      setMatches(generatedMatches)
      setStatusMessage('Sorteo completado. Tus resultados ya estan disponibles.')
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      statusRef.current?.focus()
      setIsDisabled(true)
      setTimeout(() => {
        // Scroll to the bottom of the page to see the teams
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
      }, 150)
    } catch (error) {
      setStatusMessage(error.message)
      toast.error(error.message)
    }
  }

  const handleReset = () => {
    setPlayersCount(0)
    setPlayers([])
    setMatches([])
    setIsDisabled(false)
    setFieldErrors({})
    setStatusMessage('Formulario reiniciado.')
  }

  return (
    <Card className='arcade-card border-white/15 bg-black/55 text-white backdrop-blur-xl animate-fade-in-up animate-delay-200'>
      <CardContent className='pt-6'>
        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col gap-4' noValidate>
          <Toaster />
          <p
            ref={statusRef}
            tabIndex={-1}
            role='status'
            aria-live='polite'
            className='text-sm text-slate-200'
          >
            {statusMessage}
          </p>
          <Select
            setPlayersCount={setPlayersCount}
            playersCount={playersCount}
            handleReset={handleReset}
          />
          {Array.from({ length: playersCount }).map((_, index) => {
            return (
              <div key={index} className='animate-fade-in-down animate-duration-fast'>
                <Input
                  index={index}
                  handlePlayerChange={handlePlayerChange}
                  error={fieldErrors[index]}
                />
              </div>
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
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
