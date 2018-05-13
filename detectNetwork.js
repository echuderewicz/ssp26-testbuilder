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

  var firstTwoDigits = parseInt(cardNumber.slice(0,2));
  var firstThreeDigits = parseInt(cardNumber.slice(0,3))
  var firstFourDigits = parseInt(cardNumber.slice(0,4));
  var firstSixDigits = parseInt(cardNumber.slice(0,6));

  var lengthOfCard = cardNumber.toString().length;
  var isDiners = (firstTwoDigits === 38 || firstTwoDigits === 39) && lengthOfCard === 14;
  var isAmex = (firstTwoDigits === 34 || firstTwoDigits === 37) && lengthOfCard === 15;
  var isVisa = (parseInt(firstTwoDigits/10) === 4) && (lengthOfCard === 13 || lengthOfCard === 16 || lengthOfCard === 19);
  var isMastercard = (firstTwoDigits >= 51 && firstTwoDigits <= 55) && lengthOfCard === 16;
  var isDiscover = (firstFourDigits === 6011 || firstThreeDigits === 644 || 
    firstThreeDigits === 645 || firstThreeDigits === 646 || firstThreeDigits === 647 || 
    firstThreeDigits === 648 || firstThreeDigits === 649 || firstTwoDigits === 65) && (lengthOfCard === 16 || lengthOfCard === 19);
  var isMaestro = (firstFourDigits === 5018 || firstFourDigits === 5020 || firstFourDigits === 5038 || firstFourDigits === 6304) && (lengthOfCard === 12 || lengthOfCard === 13 || lengthOfCard === 14 || lengthOfCard === 15 || lengthOfCard === 16 || lengthOfCard === 17 || lengthOfCard === 18 || lengthOfCard === 19)


  if(isVisa){
    return "Visa";
  }else if(isMastercard){
    return "MasterCard";
  }else if(isDiners){
    return "Diner's Club";
  }else if(isAmex){
    return "American Express";
  }else if(isDiscover){
    return "Discover";
  }else if(isMaestro){
    return "Maestro";
  }else{
    return false;
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












