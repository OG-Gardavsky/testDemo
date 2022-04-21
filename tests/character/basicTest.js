const chai = require('chai')
const assert = require('assert')
const expect = chai.expect
const { getCharacter } = require('../../utils/generalUtils')

const basicTest = (characterId, expectedStatusCode, requiredKeys) =>   {

    describe('Positive tests - status code - structure', () => {

        let res
        let resKeys

        it('first call', async () => {
            res = await getCharacter(characterId)
        })

        it(`expect status code to be ${expectedStatusCode}`, () => {
            expect(res.status).to.equal(expectedStatusCode)
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

        it('check if no missing properties', () => {
            const missingKeys = []
            requiredKeys.forEach( key => {
                if(!resKeys.includes(key)) {
                    missingKeys.push(key)
                }
            })
            assert(missingKeys.length === 0, `the following keys - " ${missingKeys} " are missing in response.`)
        })
    })
}

module.exports = { basicTest }
