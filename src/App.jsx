import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Pair from './pages/Pair'
import Single from './pages/Single'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/1vs1' element={<Single />} />
      <Route path='/2vs2' element={<Pair />} />
    </Routes>
  )
}

export default App
