const dataTest = (characterId, dataToCompare) => {
    if (characterId > 10 || characterId < 1) {
        throw new Error('Choose number in range 1 - 10 to call function firstTest ')
    }

    describe('check if fits to expected data', () => {

    })
}

module.exports = { dataTest }