# The Prime Factors Kata
This is another classic kata by Uncle Bob. His solution is written in Java, but any language can be used.

### Prime numbers
```
A Prime Number can be divided exactly only by 1 or itself.
It must be a whole number greater than 1. 
```
Read more on [Wikipedia](https://en.wikipedia.org/wiki/Prime_number).

### Factors
```
Factors are the numbers you multiply together to get another number.
```
Read more on [Wikipedia](https://en.wikipedia.org/wiki/Factorization)

### Prime Factorization
```
"Prime Factorization" is finding which prime numbers multiply together to make the original number.
```
Read more on [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)

## Project Setup
- Create a new git branch
- Initialize a new npm project, like so `npm init`
- Add the `mocha` test framework.
- Add `eslint` to the project setup. Run `eslint --init` to get a basic configuration. Indent with 2 spaces. Set `SwitchCase` to `1`. Enable the `mocha plugin`. Make sure you can use `console.log()` without any linting errors. (Alternatively you may copy the eslint config file and add the necessary dependencies manually to `package.json`.)
- Edit `package.json` so that `npm run test` runs the entire suite of _unit_ tests.
- Edit `package.json` so that eslint runs before the test suite.
- Edit `package.json` so that mocha run all unit tests whenever a javascript file changes. You may use whatever method you want to achive this. Mocha has a _watch_ feature, or you may use some other npm project (e.g. `nodemon`).

## The Kata
Factorize a positive integer number into its prime factors.

Input | Expected Output
---   | ---
1     | []
2     | [2]
3     | [3]
4     | [2,2]
6     | [2,3]
8     | [2,2,2]
9     | [3,3]
10    | [2,5]

### Additional Requirements
Just as with the FizzBuzz kata we did previously, we will add the same requirements on the response format and error handling.

In the response from your module, you should signal to the user __without throwing any errors!__ whether the request was successful or not. 
This means that if the users of your module makes a valid request, they should get a message back that indicates the request was successful and what the result was. 
And if they makes an invalid request, e.g. with the argument `-4` or `"foo"`, they should get a message back that says there was an error
This means that if the users of your module makes a request with the argument `-4` or `"foo"`, they should get a message that tells them there was an error and some hint about how they can make a correct request.

### TDD
Develop the code TDD style, i.e. follow the work flow __Red__, __Green__, __Refactor__.
