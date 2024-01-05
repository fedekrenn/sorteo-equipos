import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/Index'
import Pair from './pages/Pair'
import Single from './pages/Single'
import RandomTeams from './pages/RandomTeams'
import NotFound from './pages/NotFound'

function App () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/1vs1' element={<Single />} />
        <Route path='/2vs2' element={<Pair />} />
        <Route path='/random-teams' element={<RandomTeams />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
