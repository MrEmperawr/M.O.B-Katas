# FizzBuzz

Let's do the classic FizzBuzz kata described [here](http://codingdojo.org/kata/FizzBuzz/).
However, we'll add a small requirement to the original kata. In the response from your module, you should signal to the user __without throwing any errors!__ whether the request was successful or not. 
This means that if the users of your fizzbuzz module makes a valid request, they should get a message back that indicates the request was successful and what the result was. 
And if they makes an invalid request, e.g. with the argument `-4` or `"foo"`, they should get a message back that says there was an error.
This means that if the users of your fizzbuzz module makes a request with the argument `-4` or `"foo"`, they should get a message that tells them there was an error and some hint about how they can make a correct request.

## Project setup
- Create a new git branch
- Initialize a new npm project, like so `npm init`
- Add `eslint` to the project setup. Run `eslint --init` to get a basic configuration. Indent with 2 spaces. Set `SwitchCase` to `1`. Enable the `mocha plugin`. Make sure you can use `console.log()` without any linting errors. ![](https://github.com/saltsthlm/salt-kata-fizzbuzz/raw/master/eslint.png)
- Edit `package.json` so that `npm run test` runs the entire suite of _unit_ tests.
- Edit `package.json` so that eslint runs before the test suite.
- Edit `package.json` so that mocha run all unit tests whenever a javascript file changes. You may use whatever method you want to achive this. Mocha has a _watch_ feature, or you may use some other npm project (e.g. `nodemon`).

## TDD
Now it's kata time! You will find the description of FizzBuzz below.

### Red
- Write a trivial test and make sure it fails.

### Green
- Write the simplest possible implementation to make the test pass.

### Refactor
- Refactor the implementation until you're satisfied with the code. Make sure to iron out any warts and remove code duplications, dead code and unnecessary comments. Make sure it's concise and readable!

### Write a new test...
