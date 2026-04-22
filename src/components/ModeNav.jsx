import { useLocation, useNavigate } from 'react-router-dom'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const routes = {
  home: '/',
  single: '/1vs1',
  pair: '/2vs2',
  random: '/random-teams'
}

function getTabValue (pathname) {
  if (pathname === routes.single) return 'single'
  if (pathname === routes.pair) return 'pair'
  if (pathname === routes.random) return 'random'
  return 'home'
}

export default function ModeNav () {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className='mx-auto mt-2 w-full max-w-4xl px-4 md:px-6' aria-label='Modos de sorteo'>
      <Tabs
        value={getTabValue(location.pathname)}
        onValueChange={(value) => navigate(routes[value])}
        className='items-center'
      >
        <TabsList className='mx-auto h-11 rounded-2xl border border-white/15 bg-black/45 px-1.5 backdrop-blur-xl'>
          <TabsTrigger value='home' className='rounded-xl px-4 text-sm'>Inicio</TabsTrigger>
          <TabsTrigger value='single' className='rounded-xl px-4 text-sm'>1 vs 1</TabsTrigger>
          <TabsTrigger value='pair' className='rounded-xl px-4 text-sm'>2 vs 2</TabsTrigger>
          <TabsTrigger value='random' className='rounded-xl px-4 text-sm'>Aleatorio</TabsTrigger>
        </TabsList>
      </Tabs>
    </nav>
  )
}
