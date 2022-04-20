const chai = require('chai')
const expect = chai.expect
const {getCharacter} = require("../utils/generalUtils")


const dataTest = (characterId, dataToCompare, done) => {
    if (characterId > 5 || characterId < 1) {
        throw new Error('Choose number in range 1 - 5 to call function dataTest ')
    }

    describe('check if data in response fits to expected data', () => {

        it('all attributes equal', async () => {

            const res = await getCharacter(characterId)
            expect(res.data).to.deep.equal(dataToCompare);
            done()
        })
    })
}

module.exports = { dataTest }