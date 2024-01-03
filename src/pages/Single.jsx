import SelecPlayers from '../components/SelectPlayers'
import { getSimpleTeamData } from '../utils/getTeamData'

export default function SinglePage () {
  return (
    <main>
      <h1>1 vs 1</h1>
      <SelecPlayers matchFunction={getSimpleTeamData} />
    </main>
  )
}
