//udelat pole endpointu + nejaky pomocny metody co to daji dohromady - at se to dela hezky
// utilita jako test

const chai = require('chai')
const should = chai.should()
const axios = require('axios')
const assert = require('assert');
const expect = chai.expect

const { baseUrl } = require('../data/general')


const makeEndpoint = (route) => `${baseUrl}${route}`



const firstTest = (characterId, successCode, requiredKeys) =>   {

    if (characterId > 10 || characterId < 1) {
        throw new Error('Choose number in range 1 - 10 to call function firstTest ')
    }

    describe('Positive tests', () => {

        describe('Basic atributes', () => {

            let res
            let resKeys

            it('first call', async () => {
                res = await axios.get(makeEndpoint(`/character/${characterId}`))
            })

            it('status code', () => {
                expect(res.status).to.equal(successCode)
            })

            it('check if no extra properties', () => {
                resKeys = Object.keys(res.data)
                const extraKeys =[]
                resKeys.forEach( key => {
                    if(!requiredKeys.includes(key)) {
                        extraKeys.push(key)
                    }
                })
                assert(extraKeys.length === 0, `the following keys - " ${extraKeys} " should not be in response.`)
            })

            it('check if no extra properties', () => {
                const missingKeys = []
                requiredKeys.forEach( key => {
                    if(!resKeys.includes(key)) {
                        missingKeys.push(key)
                    }
                })
                assert(missingKeys.length === 0, `the following keys - " ${missingKeys} " are missing in response.`)
            })

        })


        describe('check if fits to expected data', () => {

        })

        describe('performance tests', () => {
            //iterace - fastest, midd, slowes

        })

    })

}

module.exports = { firstTest }
