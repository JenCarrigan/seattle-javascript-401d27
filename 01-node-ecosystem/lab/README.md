# Describe values of each exported module in lib folder

## Implementation
* Create a file called `index.js` that requires both the greet and arithmetic modules.
* Use this file to "greet" and perform math operations using the imported functions from the 2 modules
* `console.log()` the return values

### Greet Module
Create a NodeJS module in the `lib` directory named `greet.js`.  This module should export a single function.
* The `greet` function should have a single parameter (arity of one) that should expect a string as it's input
* The `greet` function should return the input name, concatenated with "hello ": eg. ("hello susan")
* The `greet` function should return `null` if the input is not a string

#### Greet Module Tests
* Write a test that expects the greet module to return `null` when you supply non-string values
* Write a test the expects the greet module to return `'hello world'`
  * This should happen when invoked with `'world'` as the first argument

### Arithmetic Module
Create a NodeJS module in the `lib` directory named `arithmetic.js`. This module exports an object and should have `add` and `sub` methods that implement addition and subtraction.
* The `add` method should have a 2 parameters (airty of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the sum of the 2 numbers
* The `sub` method should have 2 parameters (airty of two)
  * `if` either argument is a non-number the function should return `null`
  * `else` return the second parameter subtracted from the first parameter


#### Arithmetic Module Tests
* Test each method for proper use (invoked with number arguments)
* Test each method for improper use (invoked with one or more non-number arguments)


### Stretch Goals
* Refactor the arithmetic module to use the faker module to randomize input
* Refactor the arithmetic module to support multiply and divide (be careful to not divide by zero!)
* Refactor the arithmetic module to allow for an array of params so that you can do deeper calculations


### Documentation
Greet expects a string as its only parameter. If the parameter is a valid string, it exports a new string with "Hello " appended to front.
Arithmetic expects two parameters, both numbers. If the parameters are valid numbers, it will push the added numbers into the added key of and object, and push the subtracted numbers into the subtracted key of said object. If either or both of the parameters are invalid numbers (bools, strings, etc.) it will return with a null object. Either way, an object will be exported.

### Deployment - Stretch Goal : Will cover in class 2
Pushing to GitHub should trigger Travis-CI build. See https://dev.to/lauragift21/setup-continuous-integration-with-travis-ci-in-your-nodejs-app-26i2


