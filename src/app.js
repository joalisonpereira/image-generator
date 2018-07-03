const array=[1,2,3,4,5];

function sum(...z){
	return z.reduce((total,index)=>total+=index);
}

console.log(sum(array));