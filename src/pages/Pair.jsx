import SelecPlayers from '../components/SelectPlayers'
import { getPairTeamData } from '../utils/getTeamData'

export default function Pair () {
  return (
    <main>
      <h1>2 vs 2</h1>
      <SelecPlayers matchFunction={getPairTeamData} />
    </main>
  )
}
