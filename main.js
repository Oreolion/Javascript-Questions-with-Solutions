/**
 * Challenge - 1
 * Calculate and return the sum of the numbers in an array.
 * @param {Array} arrayOfNumbers the array of numbers to  sum
 * @returns number the sum of the numbers
 */

function sumOfElementsInArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) sum = sum + arr[i];

  return sum;
}

console.log(sumOfElementsInArray([1, 2, 3, 4, 5]));
console.log(sumOfElementsInArray([3, 6, 2, 11, 5]));

// method 2
const arrReduce = (arr) => {
  let sum = 0;

  sum = arr.reduce((total, num) => total + num), 0;

  return sum;
};

console.log(arrReduce([1, 2, 3, 4, 5]));

/**
 * Challenge - 2
 * Count all even numbers within an array of numbers.
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */

const countEvenNumbers = (arrayOfNumbers, ...evenNumbers) => {
  for (let number in arrayOfNumbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers.length;
};

console.log(
  countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 20])
);
console.log(countEvenNumbers([1, 2, 3, 4, 14, 15, 20]));


/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
*/

const convertToF = (...arr) => {
  let newArr = [];

  for (let c of arr) {
    newArr.push(Math.trunc((c * 9) / 5 + 32));
  }

  return newArr;
};

console.log(convertToF(20, 34, 54, 34));

// Challenge - 4
// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/**
 * @return {Function}
 */
const createHelloWorld = (greet) => greet = () => "Hello World";

const f = createHelloWorld();
console.log(f());

//Challenge - 5
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let myInt = n;
  return function () {
    return myInt++;
  };
};

// arrow function

var createCounter1 = (n) => {
  let myInt = n;
  return () => myInt++;
};



const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

const counter1 = createCounter1(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());

// challenge - 6
// write a function that accepts two arguments "hello " and returns a world

function concatenate(sayHello) {
  return function toWho(sayWorld) {
    return `${sayHello} ${sayWorld}`;
  };
}

console.log(concatenate("hello")("world"));

//challenge 7
// write a function that accepts an array of numbers and return fizz if an element in the array is divisible by 3 and buzz if it's divisible by 5 and fizzbuzz if it's divisible by 3 and 5. The values for each number (i.e "fizzbuzz" or "fizz") should be pushed to a new array of strings. If the number isn't divisible by 3 or 5 don't add it to the new array. So an array like [2,3,15,25,16,30,21] will return ["fizz", "fizzbuzz", "buzz", "fizzbuzz", "fizz"]

function fizzBuzz(array) {
  newArray = [];

  array.forEach(number => {
    if (number % 5 === 0 && number % 3 === 0) {
      newArray.push("Fizzbuzz");
    } else if (number % 5 === 0) {
      newArray.push("buzz");
    } else if (number % 3 === 0) {
      newArray.push("fizz");
    }
  });

  return newArray;
}

console.log(fizzBuzz([2, 3, 15, 25, 16, 30, 21]));

// using arrow function and ternary operator.
myFizzBuzzGame = (array) => {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(
      number % 5 === 0 && number % 3 === 0
        ? "Fizzbuzz"
        : number % 5 === 0
        ? "buzz"
        : number % 3 === 0
        ? "fizz"
        : "_"
    );
  });
  return newArray;
};

console.log(myFizzBuzzGame([2, 3, 15, 25, 16, 30, 21]));

// challenge 8
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  let sumOfNumbers = 0;
  for (let number of numbers) {
    sumOfNumbers += number;
  }

  return sumOfNumbers;
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));
console.log(sum([-2.3]));


// Find the smallest and biggest number in an array.

let numbers = [1, 2, 3, 4, 5];
let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);
console.log(maxNumber); // Output: 5
console.log(minNumber); // output: 1

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Math.min(...args);
    return min;
  }
}

let find = new SmallestIntegerFinder();

console.log(find.findSmallestInt([78, 56, 232, 12, 8]));
console.log(find.findSmallestInt([85, 23, 526, 232, 122, 81, 21, 78]));

// challenge 9
//Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  let result;
  // Code
  let myOperations = ["+", "-", "/", "*"];
  myOperations.forEach((myOperation) => {
    myOperation === operation;
    result = eval(`${value1} ${operation} ${value2}`);
  });

  return result;
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 2, 5));
console.log(basicOp("*", 2, 5));
console.log(basicOp("/", 2, 5));

// another method

function basicOp1(operator, value1, value2) {
  if (operator == "+") {
    return value1 + value2;
  } else if (operator == "-") {
    return value1 - value2;
  } else if (operator == "*") {
    return value1 * value2;
  } else if (operator == "/") {
    return value1 / value2;
  }
}

console.log(basicOp1("+", 4, 15));
console.log(basicOp1("-", 2, 3));
console.log(basicOp1("*", 2, 1));
console.log(basicOp1("/", 15, 3));

// challenge - 10
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



function fakeBin4(x){
  const num = x.split('')
  const arr = []
  for (const n of num) {
    if (n >= 5) {
      arr.push(n.replace(n, 1))
    } else {
     arr.push(n.replace(n, 0))
    }
  }
  return arr.join('')
}

console.log(fakeBin4("45385593107843568"));


// another method
function fakeBin(str){
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}

console.log(fakeBin("45385593107843568"));

// third method
const fakeBin3 = (x) => {
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
};
console.log(fakeBin3("53643559310780123455"));

// forth method
function fakeBin1(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}

console.log(fakeBin1("25678532212425593107"));

// fifth method.
const fakeBin2 = x => x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" );


console.log(fakeBin2("6785901234673242559"));



// challenge 11
// Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...


function getDescription(text) {
  console.log(text); 
  let firstTenChars = text.substring(0, 10);
  let lastTextIndex = "...";
  let newText = firstTenChars + lastTextIndex;
  return newText

}


console.log(getDescription("i am rich, healthy and happy"));
console.log(getDescription("i am"));


// challenge 12
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord1( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// arrow function
const boolToWord = bool => bool ? 'Yes':'No';


console.log(boolToWord(0<1));

// challenge 13
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(arrayOfSheep, ...newBox) {
  arrayOfSheep.filter(sheep => {
    if (sheep) newBox.push(sheep);
  })

  return newBox.length;

} 

console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
));


// another method
function countSheeps1(sheep) {
  return sheep.filter(Boolean).length;
}

console.log(countSheeps1([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));


// challenge 14
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.



var createCounter = function(init) {
  let ans = init;
   return {
   
    increment: function () {
      return ++ans
    },
     decrement: function () {
      return --ans
    }, 
    reset: function () {
      return ans = init
    },
     
  }
};

const count = createCounter(5)
console.log(count.increment());  // 6 
console.log(count.reset());  // 5
console.log(count.decrement());  // 4

// challenge 15
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

function getGrade (s1, s2, s3) {
  
  let average;
  const getAverage = () => average = (s1+s2+s3)/3;
  average = getAverage()
  console.log(average);
  const checkGrade = () => {

  
    
    if (90 <= average && average <= 100) return "A"
    else if (80 <= average && average< 90) return "B"
    else if (70 <= average && average < 80) return "C"
    else if (60 <= average && average< 70) return "D"
    else if (0 <= average && average < 60) return "F"
    else  return "score not found";
    
  
   
    // using ternary operator
    // return (
    //   90 <= average && average <= 100
    //     ? "A"
    //     : 80 <= average && average < 90
    //     ? "B"
    //     : 70 <= average && average < 80
    //     ? "C"
    //     : 60 <= average && average < 70
    //     ? "D"
    //     : 0 <= average && average < 60
    //     ? "F"
    //     : "Score not found"
    // );
  



    //using switch cases
    // switch (true) {
    //   case 90 <= average && average <= 100:
    //     return "A";
    //   case 80 <= average && average< 90:
    //     return "B";
    //   case 70 <= average && average < 80:
    //     return "C";
    //   case 60 <= average && average< 70 :
    //     return "D";
    //   case 0 <= average && average < 60:
    //     return "F";
    //   default:
    //     return "score not found"
    // }
    
  }

  return checkGrade()
  
}


console.log(getGrade(70,70,100));
console.log(getGrade(89,89,90));
console.log(getGrade(99,99,99));
console.log(getGrade(200,200,200));



// challenge 16
// We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  return Number(str); // we can also use the parseInt method for this.
}

var stringToNumber1 = function(str){
  return +str;
}

console.log(stringToNumber('1234'));
console.log(stringToNumber('1405'));
console.log(stringToNumber('-7'));
console.log(stringToNumber1('1234'));
console.log(stringToNumber1('1405'));
console.log(stringToNumber1('-7'));


// challenge 17
// Your task is to make two functions ( max and min, or maximum and minimum, etc. depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
  return Math.min(...list) 
}

var max = function(list){
  return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4,6,2,1,9,63,-134,566]));


// challenge 18

// Complete the function capitalize such that it capitalizes the word parameter it receives. There's no capitalize method in JavaScript, so you have to write it yourself.

function capitalize(word) {
  let firstLetter = word.substring(0,1).toUpperCase();
  let otherLetters = word.substring(1).toLowerCase();
  return firstLetter + otherLetters;
}

console.log(capitalize("sam")); 
console.log(capitalize("ALEX")); 
console.log(capitalize("chARLie"));


//exercise 19
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
  const transformedArr = [];
  arr.forEach((element, index) => {
     transformedArr[index] = fn(element, index);
  });
  return transformedArr;
};

console.log(map([1,2,3], function plusI(n, i) { return n + i; }));


// challenge 20
// write a function that can take in any sentence and return the reversed version of the sentence. 

function reverseSentence (sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseSentence(`this is too easy give me something difficult`));


// challenge 21
// write a function that can take in any sentence and return the same sentence with the first word in uppercase.
let test = "JavaScript is a lovely language"
const firstWordUppercase = (sentence) => {
  return sentence
  .split(" ")
  .map((word, idx) => (idx === 0 ? word.toUpperCase() : word))
  .join(" ");
}

console.log(firstWordUppercase(test));


// challenge 22
//write a function maxDifference(arr) that takes an array of numbers as input and returns the maximum difference between any two numbers in the array, the returned difference should be a positive number

const maxDiff = (...args) => {
  let max = Math.max(...args)
  let min = Math.min(...args)

  return max - min;
}

console.log(maxDiff(1, 3, 20, 50, 200));

// challenge 23
// write a function getWinner that returns the Ballon D'Or winner using the highest goal in an object (playerA, playerB, playerC) as the criteria. console.log(`the ballon D'Or award goes to ${players.name}`)

players = {
  playerA: {
    name: "Mbappe",
    goals: 8,
  },
  playerB: {
    name: "Ronaldo",
    goals: 10,
  },
  playerB: {
    name: "Messi",
    goals: 12,
  },
}


function getWinner (players) {
  let mostGoals = 0;
  let winner, playerName;

  for (const [player, {name, goals}] of Object.entries(players)) {
    if (goals > mostGoals) {
      mostGoals = goals;
      playerName = player;
      winner = name;
    }
  }

  return `${playerName}: ${winner} with ${mostGoals} goals`;


};

console.log(`The Ballon D'Or award Goes to ${getWinner(players)}`);



// challenge - 24
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".




var expect = function(val) {
  return {
      toBe: (val2) => {
          if (val !== val2) throw new Error("Not Equal");
          else return true;
      },
      notToBe: (val2) => {
          if (val === val2) throw new Error("Equal");
          else return true;
      }
  }
};


// console.log(expect(5).toBe(2));
console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(2));
console.log(expect(5).notToBe(5));

// arrow function
var expect2 = (val) => {
  const param = val
  return {
      toBe: (value) => (value===param)? true: (() => { throw new Error("Not Equal");})(),
      notToBe: (value) => (value!==param)? true: (() => { throw new Error("Equal"); })(),
  }
};

