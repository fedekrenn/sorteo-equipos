import { useState } from 'react'
import SelecPlayers from '../components/SelectPlayers'
import { getPairTeamData } from '../utils/getTeamData'

export default function Pair () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <h1>2 vs 2</h1>
      <SelecPlayers matchFunction={getPairTeamData} setMatches={setMatches} />
      <section>
        {JSON.stringify(matches)}
      </section>
    </main>
  )
}
