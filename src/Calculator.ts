export class Calculator {
    sumOperation(numbers: number[]): number {
        let result: number = 0
        numbers.forEach(number => {
            result = result + number
        })

        return result
    }

    subtractionOperation(numbers: number[]):number {
        let result: number = numbers[0]
        numbers.map((number, index) => {
            if(index === 1) {
                result = result - number
                return result
            }
        })

        return result
    }

    provideAGreeting(name: string): string {
        return `Hello ${name}, how are you doing?`
    }
}