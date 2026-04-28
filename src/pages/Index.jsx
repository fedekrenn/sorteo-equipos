// React Router Dom
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const modes = [
  {
    title: 'Modo 1 vs 1',
    description: 'Sorteos individuales con asignación de escudos en segundos.',
    to: '/1vs1'
  },
  {
    title: 'Modo 2 vs 2',
    description: 'Duplas equilibradas para partidas rápidas y organizadas.',
    to: '/2vs2'
  },
  {
    title: 'Partido aleatorio',
    description: 'Dos equipos al instante para arrancar sin demora.',
    to: '/random-teams'
  }
]

export default function Index () {
  return (
    <main id='main-content' tabIndex='-1'>
      <section className='mx-auto grid w-full max-w-4xl gap-8 px-4 pt-6 md:px-6 md:pt-8'>
        <header className='arcade-hero mx-auto max-w-3xl rounded-3xl border border-white/15 bg-black/55 px-6 py-8 text-center backdrop-blur-xl md:px-10 animate-blurred-fade-in animate-duration-slow'>
          <h1 className='text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl'>
            Sorteos de equipos para cada partido
          </h1>
          <p className='mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg'>
            Elegí el modo, cargá jugadores y generá cruces de forma clara, rápida y sin perder tiempo.
          </p>
        </header>

        <ul className='grid gap-4 md:grid-cols-3'>
          {modes.map((mode, index) => (
            <li key={mode.to} className={`animate-fade-in-up animate-duration-slow ${index === 0 ? 'animate-delay-100' : index === 1 ? 'animate-delay-200' : 'animate-delay-300'}`}>
              <Card className='arcade-card h-full border-white/15 bg-black/60 text-white backdrop-blur-xl'>
                <CardHeader className='space-y-2'>
                  <CardTitle className='text-xl'>{mode.title}</CardTitle>
                  <CardDescription className='text-slate-300'>{mode.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className='h-11 w-full rounded-xl bg-white text-base font-semibold text-[#12091f] transition hover:bg-slate-200'
                  >
                    <Link to={mode.to}>Entrar</Link>
                  </Button>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
