import { useState } from 'react'
// Components
import SortSection from '@components/SortSection'
import DataForm from '@components/DataForm'
import ResultCard from '@components/ResultCard'
import ResultsGrid from '@components/ResultsGrid'
// Services
import { getPairTeamData } from '@services/getTeamData'

export default function Pair () {
  const [matches, setMatches] = useState([])

  return (
    <main id='main-content' tabIndex='-1'>
      <SortSection
        title='Modo 2 vs 2'
        subtitle='Armá duplas balanceadas y sorteá rivales con una visual de partido real.'
      >
        <DataForm matchFunction={getPairTeamData} setMatches={setMatches} />
      </SortSection>
      {matches.length > 0 && (
        <ResultsGrid>
          {matches.map(({ players, squad }) => (
            <ResultCard
              key={players.join('-')}
              title={players.join(' - ')}
              subtitle={squad?.name}
              image={squad != null ? `/team-logos/${squad.image}` : undefined}
              imageAlt={squad?.name ?? 'Jugador libre'}
              isFree={squad == null}
            />
          ))}
        </ResultsGrid>
      )}
    </main>
  )
}
