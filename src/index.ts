import { Calculator } from './Calculator'

const numbers = [20, 30, 50]
const calculatorInstance = new Calculator()

console.log("[CALCULATING]")
console.log("[DONE]")
console.log("[RESULT]: ", calculatorInstance.sumOperation(numbers))

const numbersA = [5, 3]

console.log("[CALCULATING]")
console.log("[DONE]")
console.log("[RESULT]: ", calculatorInstance.subtractionOperation(numbersA))

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

console.log('[FILTERING]: ', calculatorInstance.simpleFilter(propertiesToFilter.properties, "any_id_B"))