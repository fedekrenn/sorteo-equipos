import { Routes, Route } from 'react-router-dom'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ModeNav from '@components/ModeNav'
import RouteMeta from '@components/RouteMeta'
import Index from '@pages/Index'
import Pair from '@pages/Pair'
import Single from '@pages/Single'
import RandomTeams from '@pages/RandomTeams'
import NotFound from '@pages/NotFound'
import { Analytics } from '@vercel/analytics/react'

function App () {
  return (
    <div className='app-shell'>
      <div className='app-bg-overlay' aria-hidden='true' />
      <RouteMeta />
      <Header />
      <ModeNav />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/1vs1' element={<Single />} />
        <Route path='/2vs2' element={<Pair />} />
        <Route path='/random-teams' element={<RandomTeams />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Analytics />
      <Footer />
    </div>
  )
}

export default App
