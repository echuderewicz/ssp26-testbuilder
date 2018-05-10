// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// 38345678901234 (Diner's Club)
// 39345678901234 (Diner's Club)
// 343456789012345 (American Express)
// 373456789012345 (American Express)


function getPrefix(num){

  if(num.substring(0,1) === '4'){
    return '4';
  } else {
    return num.substring(0,2);
  }
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  

  if(cardNumber.length === 14 && (getPrefix(cardNumber) === '38' || getPrefix(cardNumber) === '39')){
  	return "Diner's Club";
  }else if(cardNumber.length === 15 && (getPrefix(cardNumber) === '34' || getPrefix(cardNumber) === '37')){
  	return "American Express";
  }else if((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && getPrefix(cardNumber) === '4'){
    return "Visa";
  }else if(cardNumber.length === 16 && 
    (getPrefix(cardNumber) === '51' ||
      getPrefix(cardNumber) === '52' ||
      getPrefix(cardNumber) === '53' ||
      getPrefix(cardNumber) === '54' ||
      getPrefix(cardNumber) === '55')){
    return "Mastercard";
  }else{
  	return false;
  }
};

function assertEqual(actual, expected, testName){
	if(actual === expected){
		console.log("Passed");
	}else{
		console.log("Failed");
	}
}

// STEP TWO:
// Nice work! Extend your function to support two popular networks, Visa and Mastercard:

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

// Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.

// Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 

// 38345678901234 (Diner's Club)
// 39345678901234 (Diner's Club)
// 343456789012345 (American Express)
// 373456789012345 (American Express)
// 4123456789012 (Visa)
// 4123456789012345 (Visa)
// 4123456789012345678 (Visa)
// 5112345678901234 (MasterCard)
// 5212345678901234 (MasterCard)
// 5312345678901234 (MasterCard)
// 5412345678901234 (MasterCard)
// 5512345678901234 (MasterCard)

let prefixes = [4, 34, 37, 38, 39, 51, 52, 53, 54, 55];
let lengths = [13, 14, 15, 16, 19];

function turnNumberToString(){

}

let codes = {
  13: 1000000000000,
  14: 10000000000000,
  15: 100000000000000,
  16: 1000000000000000,
  19: 1000000000000000000
}

function generateRandom(prefix, lengthOfNumber){
  //return prefix;
  
  if(prefix.toString().length === 1){
    let random = Math.floor(codes[lengthOfNumber] + Math.random() * (codes[lengthOfNumber] * 9));
    let suffix = random.toString().split("");

    suffix.shift();

    return prefix + suffix.join("");

  }else{
    let random = Math.floor(codes[lengthOfNumber] + Math.random() * (codes[lengthOfNumber] * 9));
    let suffix = random.toString().split("");

    suffix.shift();
    suffix.shift();

    return prefix + suffix.join("");

  }
  
}

function getCombinationsArray(p,l){
  //let count = 0;
  let combinationArray = [];
  let prefixes = p;
  let lengths = l;

  prefixes.forEach(function(pre){
    lengths.forEach(function(length){
      combinationArray.push(generateRandom(pre, length))
    })
  })
  return combinationArray;
}

let combos = getCombinationsArray(prefixes, lengths);

function runCombos(combinations){
  let network = [];

  combinations.forEach(function(val){
    network.push(detectNetwork(val));

  })

  return network;
}

function run(){
  let res = runCombos(combos);
  return res;
}

// combos.forEach(function(val, index){
//   console.log("Test No. " + (index + 1) + " " + val + " length: " + val.length + " network: " + detectNetwork(val));
// })


// function runAgain(){
//   detectNetwork("38345678901234");
//   detectNetwork("39345678901234");
//   detectNetwork("343456789012345");
//   detectNetwork("373456789012345");
//   detectNetwork("4123456789012");
//   detectNetwork("4123456789012345");
//   detectNetwork("4123456789012345678");
//   detectNetwork("5112345678901234");
//   detectNetwork("5212345678901234");
//   detectNetwork("5312345678901234");
//   detectNetwork("5412345678901234");
//   detectNetwork("5512345678901234");
// }

function assertEqual(expected, actual, testname){
  if(expected === actual){
    console.log("Passed");
  }else{
    console.log("Failed")  
  }
}

assertEqual(detectNetwork("38345678901234"), "Diner's Club", "Checking if Network is correct");
assertEqual(detectNetwork("39345678901234"), "Diner's Club", "Checking if Network is correct");
assertEqual(detectNetwork("343456789012345"), "American Express", "Checking if Network is correct");
assertEqual(detectNetwork("373456789012345"), "American Express", "Checking if Network is correct");
assertEqual(detectNetwork("4123456789012"), "Visa", "Checking if Network is correct");
assertEqual(detectNetwork("4123456789012345"), "Visa", "Checking if Network is correct");
assertEqual(detectNetwork("4123456789012345678"), "Visa", "Checking if Network is correct");
assertEqual(detectNetwork("5112345678901234"), "Mastercard", "Checking if Network is correct");
assertEqual(detectNetwork("5212345678901234"), "Mastercard", "Checking if Network is correct");
assertEqual(detectNetwork("5312345678901234"), "Mastercard", "Checking if Network is correct");
assertEqual(detectNetwork("5412345678901234"), "Mastercard", "Checking if Network is correct");
assertEqual(detectNetwork("5512345678901234"), "Mastercard", "Checking if Network is correct");


// 38345678901234 (Diner's Club)
// 39345678901234 (Diner's Club)
// 343456789012345 (American Express)
// 373456789012345 (American Express)
// 4123456789012 (Visa)
// 4123456789012345 (Visa)
// 4123456789012345678 (Visa)
// 5112345678901234 (MasterCard)
// 5212345678901234 (MasterCard)
// 5312345678901234 (MasterCard)
// 5412345678901234 (MasterCard)
// 5512345678901234 (MasterCard)











