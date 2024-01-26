import teamsData from './teams.json'

const countriesQuantity = teamsData.data.filter(team => team.type === 'country').length

function randomSort (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const getSimpleTeamData = (listOfPlayers, includeCountries) => {
  let teams

  if (includeCountries) {
    if (listOfPlayers.length > countriesQuantity) {
      throw new Error('No puedes seleccionar más de 7 jugadores si incluyes selecciones')
    }
    teams = teamsData.data.filter(team => team.type === 'country')
  } else {
    teams = teamsData.data.filter(team => team.type === 'club')
  }

  const sortedPlayers = randomSort(listOfPlayers)
  const sortedSquads = randomSort(teams)

  return sortedPlayers.map((player, i) => {
    const { name, image } = sortedSquads[i]
    return {
      players: player,
      squad: {
        name,
        image
      }
    }
  })
}

export const getPairTeamData = (listOfPlayers, includeCountries) => {
  let teams

  if (includeCountries) {
    teams = teamsData.data.filter(team => team.type === 'country')
  } else {
    teams = teamsData.data.filter(team => team.type === 'club')
  }

  const sortedPlayers = randomSort(listOfPlayers)
  const sortedSquads = randomSort(teams)

  const pairs = sortedPlayers.reduce((acc, player, i) => {
    if (i % 2 === 0) {
      acc.push([player])
    } else {
      acc[acc.length - 1].push(player)
    }
    return acc
  }, [])

  return pairs.map((teamData, i) => {
    if (teamData.length === 1) {
      return {
        players: teamData,
        squad: null
      }
    }
    const { name, image } = sortedSquads[i]

    return {
      players: teamData,
      squad: {
        name,
        image
      }
    }
  })
}

export const getTwoRandomTeams = (includeCountries) => {
  let teams

  if (includeCountries) {
    teams = teamsData.data.filter(team => team.type === 'country')
  } else {
    teams = teamsData.data.filter(team => team.type === 'club')
  }

  const sorted = randomSort(teams)
  return sorted.slice(0, 2)
}
