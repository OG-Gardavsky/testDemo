const { baseUrl } = require('../data/general')
const axios = require("axios");

const makeEndpoint = (route) => `${baseUrl}${route}`
const makeGetRequest = async (url) => await axios(makeEndpoint(url))
const getCharacter = async (characterId) => await axios.get(makeEndpoint(`/character/${characterId}`))

module.exports = { makeEndpoint, getCharacter, makeGetRequest }