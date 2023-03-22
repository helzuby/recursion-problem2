


const integers = [2,4,6,8,10]
// create a javascript function
function sumArray(arr) {
	if(arr.length === 1){
		return arr[0];
	}
	else {
		return arr.pop() + sumArray(arr)
	}
};
console.log(sumArray([2,4,6,8,10]));