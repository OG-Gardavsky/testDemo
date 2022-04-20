const { basicTest } = require("./basicTest")
const { performanceTest } = require("./performanceTest")
const { dataTest } = require("./dataTest")
const { successCode, requiredKeys, characterId, itereations} = require("../data/characters")



basicTest(characterId, successCode, requiredKeys)

dataTest(characterId, {})


performanceTest(characterId, successCode, itereations )