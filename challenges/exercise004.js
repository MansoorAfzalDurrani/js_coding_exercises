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
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
