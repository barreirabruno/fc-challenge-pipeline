import { Calculator } from '../Calculator'

describe('Calculator class', () => {
    it('should execute sum operation', () => {
        const numbers = [3,5]
        const calculatorToTest = new Calculator()
        expect(calculatorToTest.sumOperation(numbers)).toBe(8)
    })

    it('should execute subtract operation', () => {
        const numbers = [5, 3]
        const calculatorToTest = new Calculator()
        expect(calculatorToTest.subtractionOperation(numbers)).toBe(2)
    })
})