import { useState } from 'react'
// Components
import SortSection from '@components/SortSection'
import DataForm from '@components/DataForm'
import ResultCard from '@components/ResultCard'
import ResultsGrid from '@components/ResultsGrid'
// Services
import { getSimpleTeamData } from '@services/getTeamData'

export default function SinglePage() {
  const [matches, setMatches] = useState([])

  return (
    <main id="main-content" tabIndex="-1">
      <SortSection
        title="Modo 1 vs 1"
        subtitle="Ingresá los jugadores y generá cruces con clubes o selecciones en segundos."
      >
        <DataForm matchFunction={getSimpleTeamData} setMatches={setMatches} />
      </SortSection>
      {matches.length > 0 && (
        <ResultsGrid>
          {matches.map(({ players, squad }) => (
            <ResultCard
              key={`${players}-${squad.name}`}
              title={players}
              subtitle={squad.name}
              image={`/team-logos/${squad.image}`}
              imageAlt={squad.name}
            />
          ))}
        </ResultsGrid>
      )}
    </main>
  )
}
