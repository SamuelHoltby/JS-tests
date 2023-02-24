import { fib100 } from './fib'
import { fibonacciNumber, printFibonacci } from './index'

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
})
