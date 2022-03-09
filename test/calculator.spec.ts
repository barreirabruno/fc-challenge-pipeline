import { Calculator } from '../src/Calculator'

describe('Calculator class', () => {
    it('should execute sum operation', () => {
        const numbers = [3,5]
        const calculatorToTest = new Calculator()
        expect(calculatorToTest.sumOperation(numbers)).toBe(8)
    })
})