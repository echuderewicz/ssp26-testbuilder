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

  	let pfix = num.substring(0,2);
  	//console.log(pfix);
  	return pfix;
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


// //correct prefix and number length

// console.log("Tests should pass below:");

//every combo:
//14 and 38
//14 and 39
//15 and 38
//15 and 39
//14 and 34
//14 and 37
//15 and 34
//15 and 37


// assertEqual(detectNetwork('38345678901234'), "Diner's Club", "14 Digit Number & Prefix: 38"); //Should Pass
// assertEqual(detectNetwork('39345678901234'), "Diner's Club", "14 Digit Number & Prefix: 39"); //Should Pass
// assertEqual(detectNetwork('383456789012345'), "Diner's Club", "15 Digit Number & Prefix: 38"); //Should Fail
// assertEqual(detectNetwork('393456789012345'), "Diner's Club", "15 Digit Number & Prefix: 39"); //Should Fail

// assertEqual(detectNetwork('34345678901234'), "American Express", "14 Digit Number & Prefix: 34"); //Should Pass
// assertEqual(detectNetwork('37345678901234'), "American Express", "14 Digit Number & Prefix: 37"); //Should Pass
// assertEqual(detectNetwork('343456789012345'), "American Express", "15 Digit Number & Prefix: 34"); //Should Fail
// assertEqual(detectNetwork('373456789012345'), "American Express", "15 Digit Number & Prefix: 37"); //Should Fail

assertEqual(getPrefix("38345678901234"), "38", "Testing 38");
assertEqual(getPrefix("39345678901234"), "39", "Testing 39");
assertEqual(getPrefix("34345678901234"), "34", "Testing 34");
assertEqual(getPrefix("37345678901234"), "37", "Testing 37");

// console.log("Tests should fail below:");

// //incorrect prefix but correct number length

// assertEqual(detectNetwork('33345678901234'), "Diner's Club", "14 Digit Number & Prefix: 38"); //Should Fail
// assertEqual(detectNetwork('33345678901234'), "Diner's Club", "14 Digit Number & Prefix: 39"); //Should Fail
// assertEqual(detectNetwork('333456789012345'), "American Express", "15 Digit Number & Prefix: 34"); //Should Fail
// assertEqual(detectNetwork('333456789012345'), "American Express", "15 Digit Number & Prefix: 37"); //Should Fail

// console.log("Tests should fail below:");

// //correct prefix but incorrect number length

// assertEqual(detectNetwork('38345678901'), "Diner's Club", "14 Digit Number & Prefix: 38"); //Should Fail
// assertEqual(detectNetwork('3934567'), "Diner's Club", "14 Digit Number & Prefix: 39"); //Should Fail
// assertEqual(detectNetwork('3434567890123'), "American Express", "15 Digit Number & Prefix: 34"); //Should Fail
// assertEqual(detectNetwork('3734567890'), "American Express", "15 Digit Number & Prefix: 37"); //Should Fail

// assertEqual(detectNetwork(''), "Diner's Club", "14 Digit Number & Prefix: 39"); //Should Fail
// assertEqual(detectNetwork(''), "American Express", "15 Digit Number & Prefix: 37"); //Should Fail
