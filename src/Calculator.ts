interface ReferencePoint {
    id: string
    location: string
    name: string
    comment: string
}

interface Property {
    rooms: number
    bathroom: number
    kitchen: number
    elevator: string
    referencePointArray: ReferencePoint[]
}

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

    simpleFilter(listToFilter: Property[], referencePointParam: string): Property[] {
        return listToFilter.filter(property => property.referencePointArray.some(rfp => rfp.id === referencePointParam))
    }
}
