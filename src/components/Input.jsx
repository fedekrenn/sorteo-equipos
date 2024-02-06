import { useState, useId } from 'react'
import { Label, TextInput } from 'flowbite-react'

export default function Inputs ({ index, handlePlayerChange }) {
  const [name, setName] = useState('')

  const inputID = useId()

  const handleChange = (event) => {
    const value = event.target.value
    setName(value)
    handlePlayerChange(index, value)
  }

  return (
    <div>
      <Label htmlFor={inputID} value={`Nombre ${index + 1}:`} className='text-slate-100' />
      <TextInput
        required
        id={inputID}
        value={name}
        onChange={handleChange}
      />
    </div>
  )
}
