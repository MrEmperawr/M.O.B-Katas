function fizz (number) {
    return number % 3 === 0 ? 'Fizz!' : number.toString().includes('3') ? 'Fizz!' : number; 
}

function buzz (number) {
    return number % 5 === 0 ? 'Buzz!' : number.toString().includes('5') ? 'Buzz!' : number;
}

function fizzAndBuzz (number) {
    return number % 5 === 0 && number % 3 === 0 ? 'FizzBuzz!' : number;
}

function fizzBuzzFunction () {
	for (i = 0; i <= 100; i++) {
		if (fizzAndBuzz(i) === 'FizzBuzz!') {
			console.log(fizzAndBuzz(i));
		} else if (buzz(i) === 'Buzz!') {
			console.log(buzz(i));	
        } else if (fizz(i) === 'Fizz!') {
            console.log(fizz(i));
        } else {
			console.log(i);
		}
	}
}

fizzBuzzFunction();
