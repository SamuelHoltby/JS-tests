"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostCommonLetter = exports.flipKeys = exports.secondSmallest = exports.firstLastSwap = exports.capitalized = exports.averageAmounts = exports.vowelCount = exports.doubleTripleEvenOddNumbers = void 0;
/**
 * Write a function that takes in an array of numbers and returns a new array with the even numbers doubled and the
 * odd numbers tripled. Use the Array.prototype.map method to implement the solution.
 */
const doubleTripleEvenOddNumbers = (array) => array.map((number) => {
    return number * (number % 2 === 0 ? 2 : 3);
});
exports.doubleTripleEvenOddNumbers = doubleTripleEvenOddNumbers;
/**
 * Write a function that takes in a string and returns the number of vowels (a, e, i, o, u) in the string.
 * Use regular expressions and the String.prototype.match method to implement the solution.
 */
const vowelCount = (string) => {
    const vowelArray = string.match(/[aeiou]/g);
    if (!vowelArray) {
        return false;
    }
    const vowelCounts = {};
    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel];
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1;
    }
    return vowelCounts;
};
exports.vowelCount = vowelCount;
/**Write a function that takes in an array of objects and returns an object with the average value for each key.
 * Use destructuring and the Array.prototype.reduce method to implement the solution.
 *
 * const arrayOfObjects = [  { a: 1, b: 2, c: 3 },  { a: 4, b: 5, c: 6 },  { a: 7, b: 8, c: 9 }];
 * **/
//TODO: not happy with this one, need to redo.
const averageAmounts = (objectArray) => {
    const result = objectArray.reduce((acc, currentObject) => {
        for (const objectKey in currentObject) {
            if (acc.hasOwnProperty(objectKey)) {
                acc[objectKey] += currentObject[objectKey];
            }
            else {
                acc[objectKey] = currentObject[objectKey];
            }
        }
        return acc;
    }, {});
    result && Object.entries(result).forEach(([key, value]) => result[key] = value / objectArray.length);
    return result;
};
exports.averageAmounts = averageAmounts;
/**Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
 * Use template literals and the String.prototype.split and String.prototype.toUpperCase methods to implement
 * the solution.**/
const capitalized = (text) => {
    return text.split(" ").map((word) => {
        const [firstLetter, ...rest] = word;
        const restOfWord = rest.join("");
        return `${firstLetter.toUpperCase()}${restOfWord}`;
    }).join(" ");
};
exports.capitalized = capitalized;
/**Write a function that takes in an array of numbers and returns an array with the first and last elements swapped.
 * Use destructuring and the Array.prototype.slice method to implement the solution.**/
const firstLastSwap = (numbers) => {
    var _a;
    const [firstNumber] = numbers;
    numbers[0] = (_a = numbers.slice(numbers.length - 1)) === null || _a === void 0 ? void 0 : _a[0];
    numbers[numbers.length - 1] = firstNumber;
    return numbers;
    /*
    * Alternative way
    * const { 0: first, [numbers.length - 1]: last, ...rest } = numbers;
      return [
        first,
        Object.values(rest),
        numbers.length > 1 ? last : undefined
      ];
    * */
};
exports.firstLastSwap = firstLastSwap;
/**Write a function that takes in an array of numbers and returns the second-smallest number in the array.
 * Use the Array.prototype.sort method to implement the solution.**/
const secondSmallest = (numberArray) => {
    const sorted = numberArray.sort();
    return sorted.length > 2 ? sorted[1] : sorted[0];
};
exports.secondSmallest = secondSmallest;
/**Write a function that takes in an object and returns a new object with all the keys and values flipped.
 * Use destructuring and the Object.entries and Object.fromEntries methods to implement the solution.**/
const flipKeys = (object) => {
    const array = Object.entries(object).map(([key, value]) => [value, key]);
    return Object.fromEntries(array);
};
exports.flipKeys = flipKeys;
/**Write a function that takes in a string and returns the most common letter in the string.
 * Use the Array.prototype.reduce method to implement the solution.**/
// @ts-ignore
const mostCommonLetter = (text) => {
    var _a;
    const vowelArray = text.toLowerCase().match(/[a-z]/ig);
    if (!vowelArray) {
        return false;
    }
    const vowelCounts = {};
    for (const vowel of vowelArray) {
        const currentCount = vowelCounts[vowel];
        vowelCounts[vowel] = currentCount ? currentCount + 1 : 1;
    }
    return (_a = Object.entries(vowelCounts).reduce((accum, current) => {
        const [, currentCount] = current;
        const [, accumCount] = accum;
        return currentCount > accumCount ? current : accum;
    })) === null || _a === void 0 ? void 0 : _a[0];
};
exports.mostCommonLetter = mostCommonLetter;
