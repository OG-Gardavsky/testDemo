const chai = require('chai')
const assert = require('assert')
const expect = chai.expect
const { makeGetRequest} = require('../../utils/generalUtils')

const negativeTest = (characterId, expectedStatusCode, nonExistentUrl) =>   {

    describe('Negative tests', () => {

        it(`Non existing endpoint - expect status code equls to ${expectedStatusCode}`, async () => {

            let resStatusCode
            try {
                const res = await makeGetRequest('/somethingNonExisting')
                resStatusCode = res.status
            } catch (err) {
               resStatusCode = err.response.status
            }

            expect(resStatusCode).to.equal(expectedStatusCode)
        })






    })
}

module.exports = { negativeTest }
