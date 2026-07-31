import { useState, useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Inputs({ index, handlePlayerChange, error }) {
  const [name, setName] = useState('')

  const inputID = useId()
  const errorID = useId()

  const handleChange = (event) => {
    const value = event.target.value
    setName(value)
    handlePlayerChange(index, value)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={inputID} className="text-sm font-medium text-slate-200">{`Nombre de jugador ${index + 1}`}</Label>
      <Input
        required
        id={inputID}
        data-player-input-index={index}
        value={name}
        onChange={handleChange}
        placeholder="Ingresá el nombre"
        autoComplete="off"
        aria-invalid={error != null}
        aria-describedby={error != null ? errorID : undefined}
        className="h-11 rounded-xl border-white/20 bg-black/35 text-slate-100 placeholder:text-slate-400"
      />
      {error != null && (
        <p id={errorID} className="text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
