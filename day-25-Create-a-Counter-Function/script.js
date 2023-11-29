function createCounter(n) {
	// return a function
	let count = n;
	return function(){
	return count++;

	}

}

// Sample Test Cases

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const secondCounter = createCounter(-3);
console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());

const thirdCounter = createCounter(42);
console.log(thirdCounter()); // 42
console.log(thirdCounter()); // 43
console.log(thirdCounter()); // 44