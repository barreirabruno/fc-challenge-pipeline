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


console.log("[CONVERSATION BEING STARTED]]")
console.log("[RESULT]: ", calculatorInstance.provideAGreeting("Bruno"))