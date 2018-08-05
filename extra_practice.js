// Solve the following problems directly in JavaScript (try to not use Ruby).

// 1. Write a function that takes in an array and returns a new array with each number tripled. For example, given [3, 1, 5, 10], the function should return [9, 3, 15, 30].

function tripleNumber(inputArray) {
  var outputArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    outputArray.push(inputArray[i] * 3);
  }
  return outputArray;
}

// console.log(tripleNumber([3, 1, 5, 10]));

// 2. Write a function that takes in an array of numbers and returns a new array of numbers less than 5. For example, given [4, 10, 8, 3], the function should return [4, 3].

function numbersLessThanFive(inputArray) {
  var outputArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < 5) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}
// console.log(numbersLessThanFive([4, 10, 8, 3, 2]));

// 3. Write a function that takes an array of numbers and returns the sum of all the numbers. For example, given [3, 9, 1], the function should return 13.

function sum(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    sum = sum + number;
  });
  return sum;
}
// console.log(sum([3, 9, 1]));

// 4. Write a function that takes in an array of strings and returns all the strings combined into a single string. For example, given [“a”, “b”, “c”], the function should return “abc”.

function string(letters) {
  var result = "";
  letters.forEach(function(letter) {
    result.push(letter);
  });
  return result;
}

console.log(string(["a", "b", "c"]));

// 5. Write a function to solve FizzBuzz (print out the numbers 1 through 100, except multiples of 3 print “Fizz”, multiples of 5 print “Buzz”, and multiples of 15 print “FizzBuzz”).

// 6. Write a function that prints the lyrics to 99 Bottles of Beer.