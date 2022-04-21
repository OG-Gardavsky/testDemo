const { baseUrl } = require('../data/general')
const axios = require("axios");


const makeEndpoint = (route) => `${baseUrl}${route}`

const getCharacter = async (characterId) => await axios.get(makeEndpoint(`/character/${characterId}`))

const makeGetRequest = async (url) => await axios(makeEndpoint(url))


module.exports = { makeEndpoint, getCharacter, makeGetRequest }