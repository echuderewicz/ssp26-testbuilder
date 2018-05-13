// STEP FOUR:
// Excellent work! Write your own tests and make them pass for the last two networks:

// China UnionPay always has a prefix of 622126-622925, 
// 624-626, or 6282-6288 and a length of 16-19.

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 
// 633110, 6333, or 6759 and a length of 16, 18, or 19.

// Heads up! Switch and Visa seem to have some overlapping 
// card numbers - in any apparent conflict, you should choose 
// the network with the longer prefix.

// When detectNetwork returns the correct network for every prefix and length
// combination for Diner's Club, American Express, Visa, MasterCard, Discover,
// Maestro, China UnionPay, and Switch you can invoke nextStep:

function withinRangeInclusive(min, max, number){
	if(min <= number && number <= max){
		return true;
	}else{
		return false;
	}
}

for(let i=622120; i<622200; i++){
	console.log(withinRangeInclusive(622126, 622925, i));
}





