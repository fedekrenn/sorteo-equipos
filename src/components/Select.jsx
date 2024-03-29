import { useId } from 'react'
// Libraries
import { Label, Select as FlowbiteSelect } from 'flowbite-react'

export default function Select ({ setPlayersCount, playersCount, handleReset }) {
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
      <FlowbiteSelect
        value={playersCount}
        id={selectID}
        onChange={handleSetPlayersCount}
        className='form-select mt-1 block w-auto text-black'
      >
        <option value='default'>Elegir opción</option>
        {Array.from({ length: 9 }, (_, index) => (
          <option key={index} value={index + 2}>
            {index + 2}
          </option>
        ))}
      </FlowbiteSelect>
    </>
  )
}
