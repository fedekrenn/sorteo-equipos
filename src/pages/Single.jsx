import { useState } from 'react'
import SelecPlayers from '@components/SelectPlayers'
import { getSimpleTeamData } from '@utils/getTeamData'

export default function SinglePage () {
  const [matches, setMatches] = useState([])

  return (
    <main>
      <h1>1 vs 1</h1>
      <SelecPlayers matchFunction={getSimpleTeamData} setMatches={setMatches} />
      <section>
        {JSON.stringify(matches)}
      </section>
    </main>
  )
}
