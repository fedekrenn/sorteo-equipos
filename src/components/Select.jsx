import { useId } from 'react'
import { Label } from '@/components/ui/label'
import {
  Select as ShadSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Select({ setPlayersCount, playersCount, handleReset }) {
  const selectID = useId()

  const handleSetPlayersCount = (value) => {
    if (value === 'default') {
      handleReset()
    }
    setPlayersCount(Number(value) || 0)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={selectID} className="text-sm font-medium text-slate-200">Cantidad de jugadores</Label>
      <ShadSelect
        value={playersCount > 0 ? String(playersCount) : undefined}
        onValueChange={handleSetPlayersCount}
      >
        <SelectTrigger
          id={selectID}
          className="h-11 w-full rounded-xl border-white/20 bg-black/35 px-3 text-slate-100"
          size="default"
        >
          <SelectValue placeholder="Elegir opción" />
        </SelectTrigger>
        <SelectContent className="rounded-xl border-white/20 bg-[#12091f] text-slate-100">
          {Array.from({ length: 9 }, (_, index) => {
            const value = String(index + 2)
            return <SelectItem key={value} value={value}>{value}</SelectItem>
          })}
        </SelectContent>
      </ShadSelect>
    </div>
  )
}
