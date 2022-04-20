const chai = require('chai')
const expect = chai.expect
const { getCharacter } = require('../../utils/generalUtils')

const performanceTest = (characterId, successCode, iterations) => {
    describe('performance tests', () => {

        it('response times', async () => {

            const responseTimes = []

            for (let i = 0; i< iterations; i++) {
                const start = new Date()
                const res = await getCharacter(characterId)
                const end = new Date()

                responseTimes.push(end - start)

                expect(res.status).to.equal(successCode)
            }


            const maxTime = Math.max(...responseTimes)
            const minTime = Math.min(...responseTimes)
            const sumTime = responseTimes.reduce((previousValue, currentValue) => {
                return (previousValue + currentValue)
            })
            const avgTime = sumTime / responseTimes.length

            console.log(`      Max response time is: ${maxTime} ms.`)
            console.log(`      Min response time is: ${minTime} ms.`)
            console.log(`      Average response time is: ${avgTime} ms.`)
        })
    })
}

module.exports = { performanceTest }