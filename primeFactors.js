function primeFactors (num) {
    if (primeNumbers(num)) {
        return [num];
    }
    let primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num /= 2;
    }
    if (primeNumbers(num)) {
        primeFactors.push(num)
    }
    return primeFactors;
}


function primeNumbers (num) {
    if (num === 1) {
        return console.log('1 is the unit number');
    }
    if (num === 2) {
        console.log(`${num} is a prime number!`);
        return true;
    }
    if (num % 2 === 0) {
        return console.log(`${num} is even.`)
    }
    for (let i = num-1; i > 1; i--) {
        if (num % i !== 0) {
            if (i === 2) {
                console.log(`${num} is a prime number!`);
                return true;
            } 
        } else {
            return console.log(`${num} is not a prime number, it is divisible by ${i}`);
        }
    }
}
