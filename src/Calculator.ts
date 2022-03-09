export class Calculator {
    sumOperation(numbers: number[]): number {
        let result: number = 0
        numbers.map(number => {
            result = result + number
        })

        return result
    }
}