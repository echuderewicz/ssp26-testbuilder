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
  
function getFirstTwoDigits(cn){
  return cn.slice(0,2);
}

function detectNetwork(cardNumber){
  let firstTwoDigits = getFirstTwoDigits(cardNumber);
  let lengthOfCard = cardNumber.length;

  var isVisa = (parseInt(firstTwoDigits/10) === 4) && (lengthOfCard === 13 || lengthOfCard === 16 || lengthOfCard === 19);
  var isMastercard = (parseInt(firstTwoDigits) === 51 || parseInt(firstTwoDigits) === 52 || 
                      parseInt(firstTwoDigits) === 53 || parseInt(firstTwoDigits) === 54 || 
                      parseInt(firstTwoDigits) === 55) && lengthOfCard === 16;
  var isDiners = (parseInt(firstTwoDigits) === 38 || parseInt(firstTwoDigits) === 39) && lengthOfCard === 14;
  var isAmex = (parseInt(firstTwoDigits) === 34 || parseInt(firstTwoDigits) === 37) && lengthOfCard === 15;


  if(isVisa){
    return 'Visa';
  }else if(isMastercard){
    return 'Mastercard';
  }else if(isDiners){
    return "Diner's Club";
  }else if(isAmex){
    return "American Express";
  }else{
    return "";
  }
}

//provided to me by Nikshala
//var isVisa = (parseInt(firstTwoDigits/10) === 4) && (lengthOfCard === 13 || lengthOfCard === 16 || lengthOfCard === 19);

function assertEqual(expected, actual, testname){
  if(expected === actual){
    console.log("Passed");
  }else{
    console.log("Failed")  
  }
}

console.log(detectNetwork("38345678901234"));
console.log(detectNetwork("39345678901234"));
console.log(detectNetwork("343456789012345"));
console.log(detectNetwork("373456789012345"));
console.log(detectNetwork("4123456789012"));
console.log(detectNetwork("4123456789012345"));
console.log(detectNetwork("4123456789012345678"));
console.log(detectNetwork("5112345678901234"));
console.log(detectNetwork("5212345678901234"));
console.log(detectNetwork("5312345678901234"));
console.log(detectNetwork("5412345678901234"));
console.log(detectNetwork("5512345678901234"));


// assertEqual(detectNetwork("38345678901234"), "Diner's Club", "Checking if Network is correct");
// assertEqual(detectNetwork("39345678901234"), "Diner's Club", "Checking if Network is correct");
// assertEqual(detectNetwork("343456789012345"), "American Express", "Checking if Network is correct");
// assertEqual(detectNetwork("373456789012345"), "American Express", "Checking if Network is correct");
// assertEqual(detectNetwork("4123456789012"), "Visa", "Checking if Network is correct");
// assertEqual(detectNetwork("4123456789012345"), "Visa", "Checking if Network is correct");
// assertEqual(detectNetwork("4123456789012345678"), "Visa", "Checking if Network is correct");
// assertEqual(detectNetwork("5112345678901234"), "Mastercard", "Checking if Network is correct");
// assertEqual(detectNetwork("5212345678901234"), "Mastercard", "Checking if Network is correct");
// assertEqual(detectNetwork("5312345678901234"), "Mastercard", "Checking if Network is correct");
// assertEqual(detectNetwork("5412345678901234"), "Mastercard", "Checking if Network is correct");
// assertEqual(detectNetwork("5512345678901234"), "Mastercard", "Checking if Network is correct");












