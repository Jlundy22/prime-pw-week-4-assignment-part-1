console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log(hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jack'))

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
console.log(addNumbers(5.7, 2.32));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log(multiplyThree(3,3,3));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number >= 0 ){
    return true;
  } else {
    return false;
  }
}
console.log(isPositive(1234355))
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let arr = [1,2,3,'dog',42]
function getLast( array ) {
  let length = array.length - 1;
  return arr[length];
}
console.log(getLast(arr));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let arr2 = [1, 'dog', 27];
function find( value, array ){
  let match = false;
  for (let i = 0; i < array.length; i++){
    if (value === arr2[i]) {
      match = true;
    }
  } return match
}
console.log(find('dog', arr2));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let arr3 = [1,2,3,4,5,5];
function sumAll(array ) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += arr3[i];
  }
  console.log(sum);
}
sumAll(arr3);
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let arr4 = [-2,0,12,-4,10,-2222, 10.234,99];

const posArr = (array) => {
  let positiveArr = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] > 0) {
      positiveArr.push(array[i]);
    }
  } return positiveArr
}
console.log(posArr(arr4));
console.log(arr4)

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
