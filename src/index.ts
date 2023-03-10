import { sortLetters } from './helpers'

type ObjectWithNumericValues = {
    [key: string]: number
}

/**
 * Write a function that takes in an array of numbers and returns a new array with the even numbers doubled and the
 * odd numbers tripled. Use the Array.prototype.map method to implement the solution.
 */
export const doubleTripleEvenOddNumbers: (array: Array<number>) => number[] = (
    array
) =>
    array.map((number) => {
        return number * (number % 2 === 0 ? 2 : 3)
    })

/**
 * Write a function that takes in a string and returns the number of vowels (a, e, i, o, u) in the string.
 * Use regular expressions and the String.prototype.match method to implement the solution.
 */
export const vowelCount: (
    string: string
) => boolean | Record<string, number> = (string: string) => {
    const vowelArray = string.match(/[aeiou]/g)

    if (!vowelArray) {
        return false
    }

    const vowelCounts: ObjectWithNumericValues = {}

    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel]
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1
    }

    return vowelCounts
}

/**Write a function that takes in an array of objects and returns an object with the average value for each key.
 * Use destructuring and the Array.prototype.reduce method to implement the solution.
 *
 * const arrayOfObjects = [  { a: 1, b: 2, c: 3 },  { a: 4, b: 5, c: 6 },  { a: 7, b: 8, c: 9 }];
 * **/
//TODO: not happy with this one, need to redo.
export const averageAmounts: (
    objectArray: object[]
) => ObjectWithNumericValues = (objectArray) => {
    const result: ObjectWithNumericValues = objectArray.reduce(
        (acc: ObjectWithNumericValues, currentObject: Record<string, any>) => {
            for (const objectKey in currentObject) {
                if (acc.hasOwnProperty(objectKey)) {
                    acc[objectKey] += currentObject[objectKey]
                } else {
                    acc[objectKey] = currentObject[objectKey]
                }
            }
            return acc
        },
        {}
    )

    result &&
        Object.entries(result).forEach(
            ([key, value]) => (result[key] = value / objectArray.length)
        )

    return result
}

/**Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
 * Use template literals and the String.prototype.split and String.prototype.toUpperCase methods to implement
 * the solution.**/
export const capitalized: (text: string) => string = (text) => {
    return text
        .split(' ')
        .map((word) => {
            const [firstLetter, ...rest] = word
            const restOfWord = rest.join('')
            return `${firstLetter.toUpperCase()}${restOfWord}`
        })
        .join(' ')
}

/**Write a function that takes in an array of numbers and returns an array with the first and last elements swapped.
 * Use destructuring and the Array.prototype.slice method to implement the solution.**/
export const firstLastSwap: (numbers: number[]) => number[] = (numbers) => {
    const [firstNumber] = numbers

    numbers[0] = numbers.slice(numbers.length - 1)?.[0]
    numbers[numbers.length - 1] = firstNumber

    return numbers

    /*
    * Alternative way
    * const { 0: first, [numbers.length - 1]: last, ...rest } = numbers;
      return [
        first,
        Object.values(rest),
        numbers.length > 1 ? last : undefined
      ];
    * */
}

/**Write a function that takes in an array of numbers and returns the second-smallest number in the array.
 * Use the Array.prototype.sort method to implement the solution.**/
export const secondSmallest: (numberArray: number[]) => number = (
    numberArray
) => {
    const sorted = numberArray.sort((a, b) => a - b)
    return sorted.length > 2 ? sorted[1] : sorted[0]
}

/**Write a function that takes in an object and returns a new object with all the keys and values flipped.
 * Use destructuring and the Object.entries and Object.fromEntries methods to implement the solution.**/
export const flipKeys: (object: Record<string, any>) => Record<string, any> = (
    object
) => {
    const array = Object.entries(object).map(([key, value]) => [value, key])
    return Object.fromEntries(array)
}

/**Write a function that takes in a string and returns the most common letter in the string.
 * Use the Array.prototype.reduce method to implement the solution.**/
// @ts-ignore
export const mostCommonLetter: (text: string) => string = (text) => {
    const vowelArray = text.toLowerCase().match(/[a-z]/gi)

    if (!vowelArray) {
        return false
    }

    const vowelCounts: ObjectWithNumericValues = {}

    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel]
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1
    }

    return Object.entries(vowelCounts).reduce((accum, current) => {
        const [, currentCount] = current
        const [, accumCount] = accum

        return currentCount > accumCount ? current : accum
    })?.[0]
}

/**
 * It takes a number, and returns a string of the first n numbers in the Fibonacci sequence
 * @param {number} max - number - The maximum number of Fibonacci numbers to print.
 * @returns A string of the fibonacci sequence up to the max number
 */
export const printFibonacci = (max: number): string => {
    if (max === 1) return '1'
    else if (max === 2) return '1,1'

    const fibonacci: bigint[] = [BigInt(1), BigInt(1)]

    do {
        fibonacci.push(
            BigInt(fibonacci[fibonacci.length - 1]) +
                BigInt(fibonacci[fibonacci.length - 2])
        )
    } while (fibonacci.length < max)

    return fibonacci.join(',')
}

/**
 * It takes a number, and returns the fibonacci number at that position
 * @param {number} max - The number of the Fibonacci sequence you want to find.
 * @returns The nth number in the fibonacci sequence
 */
export const fibonacciNumber = (max: number): string => {
    if (max === 1) return '1'
    else if (max === 2) return '1'

    let fibonacci: number | bigint = 0
    let numberMinus2: number | bigint = 1
    let numberMinus1: number | bigint = 1

    let count = 2
    do {
        fibonacci = BigInt(numberMinus1) + BigInt(numberMinus2)
        numberMinus2 = numberMinus1
        numberMinus1 = fibonacci
        count++
    } while (count < max)

    return BigInt(fibonacci).toString()
}

/**
 * We take a string, filter out all non-alphabetical characters, and then compare the filtered string to the filtered
 * string reversed
 * @param {string} palindrome - string - the string we're checking to see if it's a palindrome
 * @returns A boolean value
 */
export const isPalindrome = (palindrome: string): boolean => {
    const filteredPalindromeArray = palindrome.toLowerCase().match(/[a-z]/g)

    const filteredPalindrome = filteredPalindromeArray?.join('')
    const flippedPalindrome = filteredPalindromeArray?.reduce(
        (reversed, character) => character + reversed,
        ''
    )

    return filteredPalindrome === flippedPalindrome
}

/**
 * We take the palindrome string, filter out all non-alphabetical characters, and then compare the filtered string to the
 * filtered string reversed
 * @param {string} palindrome - string - the string we're checking to see if it's a palindrome
 * @returns a boolean value.
 */
export const isPalindromeClassic = (palindrome: string): boolean => {
    const filteredPalindromeArray = palindrome.toLowerCase().match(/[a-z]/g)

    const filteredPalindrome = filteredPalindromeArray?.join('')
    const flippedPalindrome = filteredPalindromeArray?.reverse()?.join('')
    return filteredPalindrome === flippedPalindrome
}

/**
 * It takes a string and returns the longest alphabetical substring
 * @param {string} text - the string to search through
 * @returns The longest alphabetical substring in the given string.
 */
export const findLongestAlphabetLike = (text: string): string => {
    const abc = [...'abcdefghijklmnopqrstuvwxyz']

    let track = ''

    for (const letter of abc) {
        if (text.search(track + letter) === -1) {
            break
        }

        track += letter
    }

    return track
}

/**
 * It takes an array of strings and numbers, sorts the numbers, sorts the letters, and sorts the other elements, and
 * returns a new array with the sorted elements
 * @param {(string | number)[]} array - The array to be sorted.
 * @param [orderTypes=false] - If true, the numbers, letters, and misc will be sorted.
 * @returns array with ordered types
 */
type ArrayOfStringOrNumber = (string | number)[]
export const classifyArrayElements = (
    array: ArrayOfStringOrNumber,
    orderTypes = false
): ArrayOfStringOrNumber => {
    const numbers: number[] = []
    const letters: string[] = []
    const misc: string[] = []

    const isLetter = new RegExp(/[A-Za-z]/)
    const isNumber = new RegExp(/[0-9]/)

    for (const arrayElement of array) {
        /**
         * It's checking the type of the array element, and then pushing it to the appropriate array.
         */
        switch (typeof arrayElement) {
            case 'number':
                numbers.push(arrayElement)
                break
            case 'string':
                if (isLetter.test(arrayElement)) {
                    letters.push(arrayElement)
                } else if (isNumber.test(arrayElement)) {
                    numbers.push(parseFloat(arrayElement))
                } else {
                    misc.push(arrayElement)
                }
                break
            default:
                misc.push(arrayElement)
                break
        }
    }

    if (orderTypes) {
        numbers.sort((a, b) => a - b)
        letters.sort(sortLetters)
        misc.sort(sortLetters)
    }

    return [...numbers, ...letters, ...misc]
}
