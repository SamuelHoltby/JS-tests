import { classifyArrayElements } from './challenges/weekly/classifyArrayElements'
import { fib100 } from './challenges/weekly/fib'
import { fibonacciNumber } from './challenges/weekly/fibonacciNumber'
import { findLongestAlphabetLike } from './challenges/weekly/findLongestAlphabetLike'
import { isPalindrome } from './challenges/weekly/isPalindrome'
import { printFibonacci } from './challenges/weekly/printFibonacci'

describe('Weekly Challenges', () => {
    it('Should return printFibonacci', () => {
        expect(printFibonacci(1)).toEqual('1')
        expect(printFibonacci(2)).toEqual('1,1')
        expect(printFibonacci(3)).toEqual('1,1,2')
        expect(printFibonacci(5)).toEqual('1,1,2,3,5')
        expect(printFibonacci(10)).toEqual('1,1,2,3,5,8,13,21,34,55')
        expect(printFibonacci(100)).toEqual(fib100)
    })

    it('Should return fibonacciNumber', () => {
        expect(fibonacciNumber(1)).toEqual('1')
        expect(fibonacciNumber(2)).toEqual('1')
        expect(fibonacciNumber(3)).toEqual('2')
        expect(fibonacciNumber(5)).toEqual('5')
        expect(fibonacciNumber(6)).toEqual('8')
        expect(fibonacciNumber(100)).toEqual('354224848179261915075')
    })

    it('Should return whether strings are palindromes', () => {
        const englishPalindromes = [
            'Deified',
            'A man, a plan, a canal, Panama!',
            'Was it a car or a cat I saw?',
            "Madam, in Eden, I'm Adam",
            'Able was I ere I saw Elba',
            'Radar',
            'A Santa at NASA',
            'Mr. Owl ate my metal worm',
            "A Toyota's a Toyota",
            'Ma is a nun, as I am',
            'Racecar',
            "Don't nod",
            'Eva, can I see bees in a cave?',
            'Do geese see God?',
            'Level',
            'Never odd or even',
            'No lemons, no melon',
            'Rats live on no evil star',
            'Step on no pets',
            'Was it a rat I saw?',
        ]

        englishPalindromes.forEach((palindrome) => {
            expect(isPalindrome(palindrome)).toEqual(true)
        })

        const words = ['Test', 'Pizza', 'Laptop', 'Headphones']
        words.forEach((word) => {
            expect(isPalindrome(word)).toEqual(false)
        })
    })

    it('Should return longest alphabet link', () => {
        const result = findLongestAlphabetLike('abbbcabcdefefg')
        expect(result).toEqual('abcdef')
        expect(result.length).toEqual(6)
    })

    it('Should return array as numbers, letter, misc', () => {
        //order numbers and letters
        expect(
            classifyArrayElements([2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1])
        ).toEqual([2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e'])

        //order numbers, letters, and misc
        expect(
            classifyArrayElements([
                2,
                'b',
                '!',
                4,
                'd',
                '&',
                3,
                'a',
                'c',
                '????',
                'e',
                5,
                1,
            ])
        ).toEqual([2, 4, 3, 5, 1, 'b', 'd', 'a', 'c', 'e', '!', '&', '????'])

        //order types as well
        expect(
            classifyArrayElements(
                [2, '3', 'b', '!', 4, 'd', '&', 3, 'a', 'c', '????', 'e', 5, 1],
                true
            )
        ).toEqual([1, 2, 3, 3, 4, 5, 'a', 'b', 'c', 'd', 'e', '!', '&', '????'])
    })
})
