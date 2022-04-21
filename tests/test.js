const { basicTest } = require("./character/basicTest")
const { performanceTest } = require("./character/performanceTest")
const { dataTest } = require("./character/dataTest")
const { negativeTest } = require("./character/negativeTest")
const { characters} = require("../data/character/characters")


const characterId = 1
const successCode = 200
const itereations = 15

//correct
const requiredKeys = ['id', 'name', 'status', 'species', 'type', 'gender', 'origin', 'location', 'image', 'episode', 'url', 'created']

//extra values in response
// const requiredKeys = ['id', 'name', 'status', 'species', 'gender', 'origin', 'location', 'image', 'url', 'created']

// missing values in response
// const requiredKeys = ['id', 'name', 'added', 'status', 'species', 'type', 'gender', 'added_as_well', 'origin', 'location', 'image', 'episode', 'url', 'created']


basicTest(characterId, successCode, requiredKeys)
dataTest(characterId, characters[characterId], () => {} )
performanceTest(characterId, successCode, itereations )


// negative test
const nonExistingUserId = 456415
const expectedStatusNonExisting = 404
const expectedTextNonExisting = 'Not Found'
const invalidUserId = 'invalid'
const ExpectedStatusInvalid = 500

negativeTest(nonExistingUserId, expectedStatusNonExisting, expectedTextNonExisting, invalidUserId, ExpectedStatusInvalid)


