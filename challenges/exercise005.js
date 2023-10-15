export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!
	let repeatNum = null;
	for(let index=0; index<nums.length;index++){
		
		if(nums[index] === n && index !== (nums.length-1)){
			if(nums[index+1] !== repeatNum){
			repeatNum = nums[index+1];
			return nums[index+1];
			}	 
	}
}
 return null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	let ones=0;
	let zeros=0;
	for(let index=0; index<str.length;index++){
   const char =str.charAt(index);
	 if(char === '1'){
		ones+=1;
	 }else{
		zeros+=1;
	 }
	}
	const total1sand0s = { '1': ones, '0': zeros };
  return total1sand0s;
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	let reversedNumber = [];
  n = n.toString();
  for (let index = n.length - 1; index >= 0; index--) {
    reversedNumber.push(parseInt(n.charAt(index)));
  }
 return parseInt(reversedNumber.join(''));	
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
