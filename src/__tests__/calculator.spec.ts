import { Calculator } from '../Calculator'

const propertiesToFilter = {
    properties: [
        {
            rooms: 2,
            bathroom: 2,
            kitchen: 1,
            elevator: "no",
            referencePointArray: [
                    {
                        id: "any_id_A",
                        location: "any_neighborhood_A",
                        name: "Mr someone's grocery store",
                        comment: "The house is opposite to the grocery store"
                    }
            ]
        },
        {
            rooms: 3,
            bathroom: 3,
            kitchen: 1,
            elevator: "no",
            referencePointArray: [
                    {
                        id: "any_id_B",
                        location: "any_neighborhood_B",
                        name: "Mr someone's fashion shop",
                        comment: "There's a fashion shop at the corner"
                    },
            ]
        },
        {
            rooms: 2,
            bathroom: 1,
            kitchen: 1,
            elevator: "yes",
            referencePointArray: [
                    {
                        id: "any_id_C",
                        location: "any_neighborhood_A",
                        name: "Mr someone's pet shop",
                        comment: "There'is a pet shop in th neighborhood"
                    },
            ]
        }
    ]
}

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

    it('should greet someone', () => {
        const result = "Hello ANY_NAME_HERE, how are you doing?"
        const calculatorToTest = new Calculator().provideAGreeting("ANY_NAME_HERE")
        expect(calculatorToTest).toEqual(result)
    })

    it('should filter an Property by referencePointId', () => {
        const result = [{
            rooms: 3,
            bathroom: 3,
            kitchen: 1,
            elevator: "no",
            referencePointArray: [
                    {
                        id: "any_id_B",
                        location: "any_neighborhood_B",
                        name: "Mr someone's fashion shop",
                        comment: "There's a fashion shop at the corner"
                    },
            ]
        }]
        const calculatorToTest = new Calculator().simpleFilter(propertiesToFilter.properties, "any_id_B")
        expect(calculatorToTest).toEqual(result)
    })
})