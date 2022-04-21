const chai = require('chai')
const assert = require('assert')
const expect = chai.expect
const { makeGetRequest, getCharacter} = require('../../utils/generalUtils')

const negativeTest = (
        nonExistingUserId,
        expectedStatusNonExisting,
        expectedTextNonExisting,
        invalidUserId,
        ExpectedStatusInvalid
    ) =>   {

    describe('Negative tests', () => {

        it(`Non existing endpoint - expect status code equls to ${expectedStatusNonExisting}`, async () => {

            let response
            try {
                const res = await makeGetRequest('/somethingNonExisting')
                response = res.response
            } catch (err) {
                response = err.response
            }

            expect(response.status).to.equal(expectedStatusNonExisting)
            expect(response.statusText).to.equal(expectedTextNonExisting)
        })


        it(`Non existing characterId - expect status code equls to ${expectedStatusNonExisting}`, async () => {

            let response
            try {
                const res = await getCharacter(nonExistingUserId)
                response = res.response
            } catch (err) {
                response = err.response
            }

            expect(response.status).to.equal(expectedStatusNonExisting)
            expect(response.statusText).to.equal(expectedTextNonExisting)
        })


        it(`Non valid characterId - expect status code equls to ${ExpectedStatusInvalid}`, async () => {

            let response
            try {
                const res = await getCharacter(nonExistingUserId)
                response = res.response
            } catch (err) {
                response = err.response
            }

            expect(response.status).to.equal(expectedStatusNonExisting)
            expect(response.statusText).to.equal(expectedTextNonExisting)
        })

    })
}

module.exports = { negativeTest }
