import { useState } from 'react'
// Libraries
import { toast } from 'sonner'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Toaster } from '@/components/ui/sonner'
import confetti from 'canvas-confetti'
import SortSection from '@components/SortSection'
import ResultCard from '@components/ResultCard'
import ResultsGrid from '@components/ResultsGrid'
// Services
import { getTwoRandomTeams } from '@services/getTeamData'

export default function RandomTeams () {
  const [teams, setTeams] = useState([])
  const [includeCountries, setIncludeCountries] = useState(false)

  const matchTeams = () => {
    try {
      const teams = getTwoRandomTeams(includeCountries)
      setTeams(teams)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      setTimeout(() => {
        // Scroll to the bottom of the page to see the teams
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }, 150)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main id='main-content' tabIndex='-1'>
      <SortSection
        title='Partido aleatorio'
        subtitle='Obtené dos equipos al instante para arrancar un cruce rápido.'
      >
        <Card className='arcade-card border-white/15 bg-black/55 text-white backdrop-blur-xl'>
          <CardContent className='space-y-6 pt-6'>
            <Toaster />
            <div className='mx-auto flex items-center justify-center gap-2'>
              <Checkbox
                id='includeCountriesRandom'
                checked={includeCountries}
                onCheckedChange={(checked) => setIncludeCountries(Boolean(checked))}
                className='border-white/30 bg-black/50'
              />
              <Label htmlFor='includeCountriesRandom' className='cursor-pointer text-sm font-medium text-slate-200'>
                Incluir países
              </Label>
            </div>
            <div className='text-center'>
              <Button
                onClick={matchTeams}
                className='h-11 rounded-xl bg-white px-5 text-base font-semibold text-[#12091f] transition hover:bg-slate-200'
              >
                Sortear
              </Button>
            </div>
          </CardContent>
        </Card>
      </SortSection>
      {teams.length > 0 && (
        <ResultsGrid>
          {teams.map(({ name, image }) => (
            <ResultCard
              key={name}
              title={name}
              image={`/team-logos/${image}`}
              imageAlt={name}
            />
          ))}
        </ResultsGrid>
      )}
    </main>
  )
}
