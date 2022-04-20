const { basicTest } = require("./character/basicTest")
const { performanceTest } = require("./character/performanceTest")
const { dataTest } = require("./character/dataTest")
const { successCode, requiredKeys, characterId, itereations, characters} = require("../data/character/characters")


basicTest(characterId, successCode, requiredKeys)
dataTest(characterId, characters[characterId], () => {} )
performanceTest(characterId, successCode, itereations )