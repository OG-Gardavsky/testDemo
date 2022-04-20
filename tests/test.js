const { basicTest } = require("./basicTest")
const { performanceTest } = require("./performanceTest")
const { dataTest } = require("./dataTest")
const { successCode, requiredKeys, characterId, itereations, characters} = require("../data/characters")


basicTest(characterId, successCode, requiredKeys)
dataTest(characterId, characters[characterId], () => {} )
performanceTest(characterId, successCode, itereations )