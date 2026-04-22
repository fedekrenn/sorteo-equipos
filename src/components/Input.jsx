import { useState, useId } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Inputs ({ index, handlePlayerChange }) {
  const [name, setName] = useState('')

  const inputID = useId()

  const handleChange = (event) => {
    const value = event.target.value
    setName(value)
    handlePlayerChange(index, value)
  }

  return (
    <div className='space-y-2'>
      <Label htmlFor={inputID} className='text-sm font-medium text-slate-200'>{`Nombre de jugador ${index + 1}`}</Label>
      <Input
        required
        id={inputID}
        value={name}
        onChange={handleChange}
        placeholder='Ingresá el nombre'
        autoComplete='off'
        className='h-11 rounded-xl border-white/20 bg-black/35 text-slate-100 placeholder:text-slate-400'
      />
    </div>
  )
}
