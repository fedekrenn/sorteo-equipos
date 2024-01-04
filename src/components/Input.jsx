import { useState, useId } from 'react'

export default function Inputs ({ index, handlePlayerChange }) {
  const [name, setName] = useState('')

  const inputID = useId()

  const handleChange = (event) => {
    const value = event.target.value
    setName(value)
    handlePlayerChange(index, value)
  }

  return (
    <label className='block'>
      <span>Nombre {index + 1}:</span>
      <input
        required
        type='text'
        className='form-input mt-1 block w-full text-black'
        id={inputID}
        value={name}
        onChange={handleChange}
      />
    </label>
  )
}
