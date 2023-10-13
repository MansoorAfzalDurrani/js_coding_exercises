export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	
	let numsSquareArray=[];
	for(let index=0; index<nums.length; index++){
		numsSquareArray[index]=nums[index] * nums[index];
	}
return numsSquareArray;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	let camelCasedWord = words[0];
	for(let index=1; index<words.length; index++){
		camelCasedWord += words[index].charAt(0).toUpperCase()+words[index].slice(1);
	}
	//console.log(camelCasedWord);
	return camelCasedWord;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let totalSubjects = 0;
  for (let nameIndex = 0; nameIndex < people.length; nameIndex++) {
    totalSubjects += people[nameIndex]["subjects"].length;
  }
	//console.log(totalSubjects);
  return totalSubjects;
	
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	//console.log(' menu[0].ingredients '+menu[0].ingredients);
	for (let item of menu) {
		//if (menu[index].ingredients === ingredient) is any proglem with this check with teacher.
    if (item.ingredients.includes(ingredient)) {
      return true;
    }
  }
	return false;	
}
export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	const duplicates = [];
  for (let number of arr1) {
    if (arr2.includes(number) && !duplicates.includes(number)) {
      duplicates.push(number);
    }
  }
  return duplicates.sort();
}	
