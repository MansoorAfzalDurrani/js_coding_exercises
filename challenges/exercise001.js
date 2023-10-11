// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	const capitalized =word.charAt(0).toUpperCase()+word.slice(1);
	//console.log(capitalized);
	return capitalized;
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!
	const initials = firstName.charAt(0) + '.' + lastName.charAt(0);
  //console.log(initials);
  return initials;
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
// Add your code here!
	const vatAmount = (originalPrice * vatRate) / 100;
  const priceWithVAT = originalPrice + vatAmount;
  const priceRoundedToTwoDecimalPlaces = Math.round(priceWithVAT*100)/100;
	//console.log(priceRoundedToTwoDecimalPlaces);
  return priceRoundedToTwoDecimalPlaces;

}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!
	const reductedPrice = (originalPrice*reduction)/100;
	const finalPriceAfterReduction= originalPrice-reductedPrice;
	const exactPrice =Math.round(finalPriceAfterReduction*100)/100;
	//console.log(exactPrice);
	return exactPrice;
	
}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!

	const middleCharacter = Math.floor(str.length / 2);
	console.log(' String is '+str+' length is ' + str.length);
	console.log(str.length%2);
	if (str.length % 2 === 1) {
			console.log(' str is odd '+ str +' Middle character is '+str.charAt(middleCharacter))
			return str.charAt(middleCharacter);
	} else {
			console.log('String is Even ' +str.slice(middleCharacter - 1, middleCharacter + 1));
			return str.slice(middleCharacter - 1, middleCharacter+1);
	}

}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!
}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
}
