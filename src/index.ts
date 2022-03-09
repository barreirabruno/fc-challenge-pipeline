import { Calculator } from './Calculator'

const numbers = [20, 30, 50]
const calculatorInstance = new Calculator()

console.log("[CALCULATING]")
console.log("[DONE]")
console.log("[RESULT]: ", calculatorInstance.sumOperation(numbers))