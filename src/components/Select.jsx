import { useId } from 'react'
import { Label, Select } from 'flowbite-react'

export default function MySelect ({ setPlayersCount, playersCount, handleReset }) {
  const selectID = useId()

  const handleSetPlayersCount = (event) => {
    const value = event.target.value
    if (value === 'default') {
      handleReset()
    }
    setPlayersCount(value)
  }

  return (
    <>
      <Label htmlFor={selectID} value='Cantidad de jugadores:' className='text-slate-100' />
      <Select
        value={playersCount}
        id={selectID}
        onChange={handleSetPlayersCount}
        className='form-select mt-1 block w-auto text-black'
      >
        <option value='default'>Elegir opción</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
        <option value='10'>10</option>
      </Select>
    </>
  )
}
