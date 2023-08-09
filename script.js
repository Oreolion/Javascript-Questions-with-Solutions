// Exercise 1
//  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(numbers) {
  let arrayBox = [];
  numbers
    .toString()
    .split("")
    .reverse()
    .forEach((item) => {
      arrayBox.push(+item);
    });

  return arrayBox;
}

console.log(digitize(35231));

// another method
const digitize1 = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((i) => +i);

console.log(digitize1(35231));

// exercise 2

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.

// using filter method
const filter0 = (arr, fn, ...filtered) => {
    arr.filter((item, index) => {
        if (fn(item, index) ) return filtered.push(item)
    })

    return filtered
}



// using forEach Method
const filter = (arr, fn, ...filteredArray) => {
    arr.forEach((item, index) => { if (fn(item, index) ) return filteredArray.push(item) });
    return filteredArray;
};


// using For Method
const filter1 = function(arr, fn, ...newArray) {
    for(let i=0; i<arr.length; i++){
       if(fn(arr[i],i)){
          newArray.push(arr[i]);
       }
    }
    return newArray;
};

console.log(
  filter0(
    (arr = [-2, -1, 0, 1, 2]),
    (fn = function plusOne(n) {
      return n + 1;
    })
  )
);


console.log(
  filter0(
    (arr = [1, 2, 3]),
    (fn = function firstIndex(n, i) {
      return i === 0;
    })
  )
);
console.log(
  filter(
    (arr = [0, 10, 20, 30]),
    (fn = function greaterThan10(n) {
      return n > 10;
    })
  )
);


// exercise 3
// Programmatically create an array of 100 random dice rolls
// You are creating the array programmatically;
//example;
//console.log(diceRoll())
// [4, 3, 3, 5, 2, 3, 4, 5, 2, 2, 6, 1, 4, 5, 2, 4, 1, 1, 2, 5, 5, 1, 6, 5, 2, 6, 2, 4, 1, 2, 1, 4, 6, 4, 5, 6, 4, 2, 5, 2, 5, 3, 4, 3, 4, 4, 1, 3, 3, 4, 2, 3, 6, 3, 6, 1, 2, 6, 2, 5, 1, 2, 1, 1, 3, 4, 1, 5, 5, 5, 5, 6, 1, 4, 1, 6, 4, 3, 4, 2, 1, 5, 3, 1, 2, 6, 2, 1, 2, 2, 4, 6, 6, 3, 4, 3, 1, 5, 6, 3]

const diceRoll = () => {
  const numberOfRolls = [];
  const arrayRolls = [];
  arrayRolls.length = 100;
  let randomRoll = () => Math.floor(Math.random() * 6);
  for (let roll of arrayRolls) numberOfRolls.push(randomRoll());
  return numberOfRolls;
};

console.log(diceRoll());

// another method

const randomDiceNum = () => Math.floor(Math.random() * 6) + 1;
const diceArray = Array.from({ length: 100 }, () => randomDiceNum());
console.log(diceArray);


// exercise 4
//  write a function that will return the factorial of a number e.g. myFunction(5) will return 120 i.e. 5*4*3*2*1



function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));

// exercise 5
// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    let mil = 1000;
    let sec = s * mil;
    let min =  m * 60 * 1000;
    let hour = h * 60 * 60 * 1000;
    return  hour + min + sec

}

// another method
function past2(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}


console.log(past(0,1,1));
console.log(past(1,1,1));
console.log(past(0,0,0));
console.log(past(1,0,1));
console.log(past2(1,0,0));



// exercise 6
// write a function that takes an array of words and smashes them together into  sentence and return the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. be careful there shouldnt be a space at the beginning or the end of the sentence.

const smash = words => words.join(" ") ;

console.log(smash(["hello", "world", "this", "is", "great"]));

// bonus
//create a function that turns a string into a number
const stringToNumber = str =>  +str


console.log(stringToNumber("12"));

// exercise 7
// create a function with two arguments that will return an array of the first n multiples of x. return the number as an array or list.

const createArray = (n, x, ...arr) => {
    for ( let i = 1; i <= x; i++ )  arr.push(n * i);
    return arr;
}

console.log(createArray(2, 5));
console.log(createArray(1, 10));




// exercise 8
// Create a function that reverses the order of an undefined number of positive integer elements in an array. Meaning, the first becomes the last and vice versa.

// Edge case: I might pass in a floating point or negative number, your function should see to it, that it’s properly converted to a positive number and or rounded to the nearest whole number before returning the final array

const reverse = (arr, ...newArr) => {
    arr.forEach( (i) => newArr.push(Math.abs(Math.trunc(i))))
    return newArr.reverse()
}


console.log(reverse([2,-4,6.3,8,10]));


// exercise 9
// given a random non-negative number, you have to return the digits of this number within an array in a reverse order.

const returnDigits = (digits) => `${digits}`.split('').reverse().map(i => +i )

console.log(returnDigits(12345));


const returnDigits2 = (n, b, ...arr) => {
   b =(n+"").split("").reverse().forEach(i => arr.push(Number(i)));
   return arr;
}

console.log(returnDigits2(12345));

// exercise 10
// Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

// A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

// If the length of the array is 0, it should return init.

// Please solve it without using the built-in Array.reduce method.


// using forEach Method
function reducer ( nums, fn, init) {
    let value = init
    nums.forEach(number  => {
        value = fn(value, number)
    })
    
    return value;
}


// using for Loop
function reducer1 (nums, fn, init) {
    let val = init;
    for (i = 0; i < nums.length; i++) {
        val = fn (val, nums[i])
        
    }
    return val;

}

// using recursion
function reduceArray(nums, fn, init) {
    if (nums.length === 0) {
      return init;
    } else {
      const head = nums[0];
      const tail = nums.slice(1);
      const val = fn(init, head);
      return reduceArray4(tail, fn, val);
    }
  }



console.log( reducer1(nums = [1,2,3,4],
    fn = function sum(accum, curr) { return accum + curr; },
init = 0));



console.log( reducer(nums = [1,2,3,4],
    fn = function sum(accum, curr) { return accum + curr * curr; },
init = 100));


// Question 11: Array Chunking

// Write a function that takes an array and a chunk size as parameters, and returns an array of smaller arrays (chunks) where each chunk has a maximum length of the specified chunk size. If there are leftover elements that do not fit evenly into a chunk, they should be placed in a smaller chunk.
// For example:
// const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;
// const chunkedArray = chunkArray(originalArray, chunkSize);
// console.log(chunkedArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9],[10]]


function theChunker (arr, chunkSize) {
    let bigArray = []
    const getAll = () => {
        let newArr = arr.splice(0, chunkSize);
        bigArray.push(newArr);
    };

    while (arr.length > 0 ) getAll();
    return bigArray
      
}


console.log(theChunker([1,2,3,4,5,6,7,8,9,10], 3));

// using recursion

const chunk = (arr, cs, chunked = []) => {
    if (arr.length <= cs) {
        chunked.push(arr);
        return chunked;
    }
    chunked.push(arr.slice(0, cs));
    return chunk(arr.slice(cs), cs, chunked);
};

console.log(chunk([1,2,3,4,5,6,7,8,9,10], 3));

// Question 12: Array Intersection
// write a function that takes two arrays, arr1 and arr2, and return a new array containing only the elements that are common between both arrays, without any duplicates. For example
// const arr1 = [1,2,3,4,5];
// const arr2 = [3,4,5,6,7];
// const commonElements = findCommonElements(arr1, arr2)
// console.log(commonElements); // output: [3,4,5]


function onlyCommonArrayElements (arr1, arr2, myArray = []) {
    arr1.forEach((item) => { if (arr2.includes(item))  return myArray.push(item) })
    let [...unique] = new Set(myArray)
    return unique;
    
}

console.log(onlyCommonArrayElements([1,2,3,4,5], [3,4,5,6,7]));


//Question 13: write a function that takes two arrays, arr1 and arr2, and return a new array containing all the elements in both arrays with no duplicate


const commonArrayElements = (arr1, arr2) => commonItem = Array.from(new Set(arr1.concat(arr2))) 


console.log(commonArrayElements([1,2,3,4,5], [3,4,5,6,7] ));

// Question 14: Array Rotation

// Write a function that takes an array and a number k as parameters, and rotates the elements of the array to the right by k positions. The rotated array should wrap around, so elements that are rotated off the end should appear at the beginning.

// For example:

// const originalArray = [1, 2, 3, 4, 5];
// const rotationAmount = 2;
// const rotatedArray = rotateArray(originalArray, rotationAmount);
// console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]

const test = [1,2,3,4,5]
const otherTest = [1,2,3,4,5]

const rotateArr = (arr, num) => {
    const arrayCopy = arr.slice();
    const newArr = arrayCopy.splice(-num);
    for (let num of arrayCopy) newArr.push(num);
    return newArr;
}

console.log(rotateArr(test, 2));

// using recursion

const rotate = (arr, n, r = [...arr]) => {
    if (n < 0) return r;
    r.unshift(r.pop());
    return rotate(r, --n)
}

console.log(rotate(otherTest, 2));

// question 15:
// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).


const returnArray = (a, b, result = []) => {
  for (let count = b; count > 0; count--)  result.push(count * a);
  return result.reverse() 
}


// another method with for loop
function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
      z.push(x * i);
  }
  return z;
}


// another method

function countBy1(x, n) {
  return Array(n).fill(x).map( (el, ind) => el * (ind + 1) );
}


// using array.from method
const countBy2 = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

console.log(returnArray(2,10));
console.log(countBy(2,10));
console.log(countBy1(2,10));
console.log(countBy2(2,10));


// question 16:
// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 

function setAlarm(employed, vacation){
   return employed && !vacation;
}

