import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ModeNav from '@components/ModeNav'
import RouteMeta from '@components/RouteMeta'
import { Analytics } from '@vercel/analytics/react'

const Index = lazy(async () => await import('@pages/Index'))
const Pair = lazy(async () => await import('@pages/Pair'))
const Single = lazy(async () => await import('@pages/Single'))
const RandomTeams = lazy(async () => await import('@pages/RandomTeams'))
const NotFound = lazy(async () => await import('@pages/NotFound'))

function App () {
  return (
    <div className='app-shell'>
      <div className='app-bg-overlay' aria-hidden='true' />
      <RouteMeta />
      <Header />
      <ModeNav />
      <Suspense fallback={<main id='main-content' tabIndex='-1' />}>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/1vs1' element={<Single />} />
          <Route path='/2vs2' element={<Pair />} />
          <Route path='/random-teams' element={<RandomTeams />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
      <Footer />
    </div>
  )
}

export default App
