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
/*

describe('getBusNumbers', () => {
	// A bus can hold 40 people. This function should return how many buses are required for the number of people
	test('returns 1 if all the people fit in 1 bus', () => {
		expect(getBusNumbers(1)).toBe(1);
		expect(getBusNumbers(10)).toBe(1);
		expect(getBusNumbers(25)).toBe(1);
		expect(getBusNumbers(39)).toBe(1);
		expect(getBusNumbers(40)).toBe(1);
	});

	test('returns 2 if 2 buses are required', () => {
		expect(getBusNumbers(41)).toBe(2);
		expect(getBusNumbers(50)).toBe(2);
		expect(getBusNumbers(55)).toBe(2);
		expect(getBusNumbers(80)).toBe(2);
	});

	test('returns 3 if 3 buses are required', () => {
		expect(getBusNumbers(81)).toBe(3);
		expect(getBusNumbers(85)).toBe(3);
		expect(getBusNumbers(100)).toBe(3);
		expect(getBusNumbers(120)).toBe(3);
	});

	test('returns the correct number of buses for larger numbers of people', () => {
		expect(getBusNumbers(43728)).toBe(1094);
	});
});
*/
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
}
