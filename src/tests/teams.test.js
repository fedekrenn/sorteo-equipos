import { describe, test, expect } from 'vitest'
import { getSimpleTeamData, getPairTeamData, getTwoRandomTeams } from '@utils/getTeamData.js'

const array = ['Fede', 'Nico', 'Mauro', 'Luciano', 'David']

describe('getSimpleTeamData', () => {
  test('Should return an array of players and sorted squads', () => {
    const data = getSimpleTeamData(array, false)

    expect(data).length(array.length)
    expect(data[0]).toHaveProperty('players')
    expect(data[0]).toHaveProperty('squad')
    expect(data[0].players).equal(array[0])
  })
})

describe('getPairTeamData', () => {
  test('Should return an array of player pairs and their respective sorted teams', () => {
    const data = getPairTeamData(array, true)

    expect(data).toBeDefined()
    expect(data[0]).toHaveProperty('players')
    expect(data[0]).toHaveProperty('squad')
    expect(data[0].players).toBeInstanceOf(Array)
    expect(data[0].players).length(2)
  })
})

describe('getTwoRandomTeams', () => {
  test('Should return an array of two random teams', () => {
    const data = getTwoRandomTeams(false)

    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)
    expect(data).length(2)
  })
})
