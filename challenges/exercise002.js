export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	if(person.city === 'Manchester'){
		return true;
	}else{
		return false;
	}
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let noofBuses = 0;
	const noOfBuses = Math.floor(people / 40);
	  if (people % 40 > 0) {
	     return noOfBuses + 1; 
    } else {
			 return noOfBuses; 
    }
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	let sheepCount = 0;
	for (const item of arr) {
		if (item === 'sheep') {
				sheepCount++;
		}
}
return sheepCount;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	const firstChar = person.address.postCode.charAt(0)
	//console.log(firstChar + person.address.city);
	if (firstChar === 'M' && person.address.city   ==='Manchester') {
		return true;
		}else{
			return false;
		}
}
