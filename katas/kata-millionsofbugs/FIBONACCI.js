let a = 1;
let b = 1;

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        a = b + a;
        console.log(a);
        primeNumber(a);
    } else {
        b = a + b;
        console.log(b);
        primeNumber(b);
    }
}

function primeNumber (number) {
    if (number === 1) {
        console.log(number + ' is 1');
        return;
    }
    if (number % 2 === 0) {
        console.log(number + ' is even');
        return;
    }
    for (let i = number-1; i > 1; i-- ) {
        if (number % i !== 0) {
            if (i === 2) {
                console.log(number + ' IS A PRIME NUMBER!');
                break;
            }
            //console.log('Tried ' + i + ', moving on to ' + (i-1));
        } else { 
            console.log(number + ' is NOT a prime number because it is divisible by ' + i);
            break;
        }
    }
}

//primeNumber(795121);
//795121
//92837465