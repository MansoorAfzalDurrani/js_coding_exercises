export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	let smallNums=[];
	for(let index=0; index<nums.length; index++){
		if(nums[index]<1){
			smallNums.push(nums[index]);
		}
	}
return smallNums;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	let nameFound =[];
	for(let index=0; index<names.length;index++){
		if(names[index].charAt(0) === char){
			nameFound.push(names[index]);
		}		
	}
	return nameFound;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	let verbFound=[]
	for(let index=0; index<words.length;index++){
		if(words[index].slice(0,3) === 'to '){
			verbFound.push(words[index]);
		}
		}
		return verbFound;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	let integers=[];
	for (let num of nums) {
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  }

  return integers;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	const cities = [];

  for (let i = 0; i < users.length; i++) {
    const displayName = users[i].data.city.displayName;
    if (displayName) {
      cities.push(displayName);
    }
  }
	  return cities
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const squareRoots = [];
	for(let num of nums){
		const squarRoot =Math.sqrt(num).toFixed(2);
		squareRoots.push(parseFloat(squarRoot));
	}
	return squareRoots;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	const matchingSentences = [];

  for (let sentence of sentences) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      matchingSentences.push(sentence);
    }
  }
  return matchingSentences;		
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
	let largestSide=[];
	for(let i=0;i<triangles.length;i++){
	let largestSideInEachtriagle = triangles[i][0];
for(let j=0; j<triangles[i].length; j++){
if(triangles[i][j] >largestSideInEachtriagle){
	largestSideInEachtriagle=triangles[i][j];
}
}
largestSide.push(largestSideInEachtriagle);
}
return largestSide;
}
