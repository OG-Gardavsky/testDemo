const { baseUrl } = require('../data/general')
const axios = require("axios");


const makeEndpoint = (route) => `${baseUrl}${route}`

const getCharacter = async (characterId) => await axios.get(makeEndpoint(`/character/${characterId}`))


module.exports = { makeEndpoint, getCharacter }