const { basicTest } = require("./character/basicTest")
const { performanceTest } = require("./character/performanceTest")
const { dataTest } = require("./character/dataTest")
const { negativeTest } = require("./character/negativeTest")
const { successCode, requiredKeys, characterId, itereations, characters} = require("../data/character/characters")


const nonExistingUserId = 456415
const expectedStatusNonExisting = 404
const expectedTextNonExisting = 'Not Found'
const invalidUserId = 'dfjksdfdk'
const ExpectedStatusInvalid = 500

basicTest(characterId, successCode, requiredKeys)
dataTest(characterId, characters[characterId], () => {} )
performanceTest(characterId, successCode, itereations )
negativeTest(nonExistingUserId, expectedStatusNonExisting, expectedTextNonExisting, invalidUserId, ExpectedStatusInvalid)


