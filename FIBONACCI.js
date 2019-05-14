function fibonacciPrimes(number, iterations) {
    let a = 1;
    let b = 1;
    let primeArray = [];
    for (let i = 0; i < iterations; i++) {
        if (i % 2 === 0) {
            a = b + a;
            console.log(a);
            primeNumber(a);
            primeArray.push(primeNumber(a));
            
        } else {
            b = a + b;
            console.log(b);
            primeNumber(b);
            primeArray.push(primeNumber(b));
        }
    } return primeArray;
}

function primeNumber (number) {
    if (number === 1) {
        console.log('1 is the unit number.');
        return;
    }
    if (number === 2) {
        return console.log(`${number} is a prime number!`);
    }
    if (number % 2 === 0) {
        return console.log(`${number} is even.`)
    }
    for (let i = number-1; i > 1; i-- ) {
        if (number % i !== 0) {
            if (i === 2) {
                console.log(`${number} is a prime number!`);
                return number;
            }
        } else { 
            return console.log(`${number} is not a prime number, it is divisible by ${i}`);
        }
    }
}
