export class Calculator {
    sumOperation(numbers: number[]): number {
        let result: number = 0
        numbers.map(number => {
            result = result + number
        })

        return result
    }

    subtractionOperation(numbers: number[]):number {
        let result: number = numbers[0]
        numbers.map((number, index) => {
            console.log('[INDEX]', index)
            if(index === 1) {
                console.log(result = result - number)
                return result
            }
        })

        return result
    }
}