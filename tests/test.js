//udelat pole endpointu + nejaky pomocny metody co to daji dohromady - at se to dela hezky
// utilita jako test

const chai = require('chai')
const should = chai.should()
const axios = require('axios')
const assert = require('assert');
var expect = chai.expect;


const makeEndpoint = (route) => `${baseUrl}${route}`

const baseUrl = 'https://rickandmortyapi.com/api'




const succesCode = 200

const requiredKeys =
    ['id', 'name', 'status', 'species', 'type', 'gender', 'origin', 'location', 'image', 'episode', 'url', 'created']





describe('first test', () => {

    describe('basic testik', () => {
        it('Neco random', async () => {

            const res = await axios.get(makeEndpoint('/character/1'))
            
            
            expect(res.status).to.equal(succesCode)
            const resKeys = Object.keys(res.data)

            const extraKeys =[]
            resKeys.forEach( key => {
                if(!requiredKeys.includes(key)) {
                    extraKeys.push(key)
                }
            })
            assert(extraKeys.length === 0, `the following keys - " ${extraKeys} " should not be in response.`)

            missingKeys = []
            requiredKeys.forEach( key => {
                if(!resKeys.includes(key)) {
                    missingKeys.push(key)
                }
            })

            console.log(missingKeys)

            assert(missingKeys.length === 0, `the following keys - " ${missingKeys} " are missing in response.`)



        })
    })

})