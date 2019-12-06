# JavaScript Notes
This file contains implementation of of the most important ES6+ examples and challenges from the [Scrimba](https://scrimba.com/) courses [Learn modern JavaScript](https://scrimba.com/g/ges6) and [Introduction to ES6+](https://scrimba.com/g/gintrotoes6).

## Template Literals (Template Strings)
Template literals are string literals allowing embedded expressions and honors whitepace and line breaks, allowing multi-line strings and string interpolation. Template literals are enclosed by the back-tick  (\` \`).

```JS
// Variable substitution.
console.log(`${firstName} ${lastName}`)

// Newline characters are honoured.
console.log(`${firstName}\n${lastName}`)

// Multiline strings.
console.log(`${firstName}

${lastName}`)

// Expression interpolation
console.log(`${num1 + num2}`)
```
Mozilla documentation: [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Enhanced Object Literals

ES6 enhances declaration of object literals by adding: 

* Adding shorthand for object initializing from variables by removing repetition when variable names and object prperties are equal.
* Adding shorthand for writing methods in (and returned from) objects.
* Introducing computation of property names.

```JS
// Checking if a property key has a corresponding variable name and assigns the value 
// of that variable to the property. 
// Instead of: return {make: make, model: model}
function makeObject(make, model) {
    return {
        make,
        model
    }
}

// Shorthand for defining methods in objects.
function makeObject(make, model) {
    return{
        // Instead of: getModel : function() {return model}
        getModel() {
            return model;
        }
    }
}

makeObject("Make", "Model").getModel();

// Computed property names.
var name = "make";
const laptop = {
    // Property is dynamically computed.
    [name + i]: "Model"
}

console.log(object.make1);

// Object literals does not only detect function parameters. 
function makeAddress(address) {

    const { city, state } = address;
    const newAddress = {
        // The object literal infers the values of the destructured object (See Destructuring Assignment).
        city, state, country: 'United Stated'
    };
}

```
Read more: [Enhanced Object Literals](https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d).

## Destructuring Assignment

Destructuring assignment allows unpacking of values from arrays, objects, maps and sets into distinct variables using syntax that looks similar to array or object literals.

### Destructuring Objects
```JS
const person = {
    firstName: 'Firstname',
    lastName: 'Lastname',
    city: 'City',
    zipCode: '1000'
}

const { firstName, lastName } = person;

// Object destructuring supports renaming the unpacked values.
const { firstName: fn, lastName: ln } = person;
console.log(`${fn} ${ln}`)
```

### Destructuring Arrays

```JS
    let [firstName, lastName] = ['Firstname', 'Lastname'];
    console.log(`${firstName} ${lastName}`)

    // Resetting the value of the array using the destructured pointer.
    lastName = 'Reset'
    console.log(`${firstName} ${lastName}`)
```
Mozilla documentation: [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

## Enhanced for-loop (for-of loop).
The `for...of` statement creates a loop iterating over iterable objects, (e,g arrays strings, maps and sets).

```JS
const numbers = [100, 200, 300];
let total = 0;
for (const number of numbers) {
    total += number;
}    

 // Updating the values of the iterable is not allowed.
 for (let number of numbers) {
    number += 10
    total += number;
} 

```
Mozilla documentation: [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

### The Spread Syntax
The spread syntax (`...`) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (function calls) or elements (array literals) are expected.
```JS
// Copies values from one array to another by value.    
const numbers = [1, 2, 3];
const numbersCopy = [...numbers1];

// Pushing a new value on to the source array does not change the array holding the copied values.
numbers.push(4);

// Expansion when calling a function.
function sum(x, y, z) {
    return x + y + z;
}

const result = sum(...[1, 2, 3]);

// Creating a new array from the values of the original array, while adding new elements at the same time. 
const moreNumbers = [...numbers, 5, 6];

// The spread syntax can also be used on and inside objects (from ECMAScript 2018).
let person1 = {
    lastName: 'Lastname'
};

let person2 = {
    // A default value will be overridden if the value exist in the source object. 
    firstName: 'Firstname',
    ...person1
}
```
Mozilla documentation: [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

### Rest Parameters
The rest parameter syntax (`function(...arguments)`) allows representing an unknown number of arguments as an array (similar to Java varargs).

```JS
// Summing an indefintate range of numbers.
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

const sum = add(1, 2, 3);
```

Mozilla documentation: [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).

### Default Parameters
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```JS
// sum() called without an array would cause an error. Adding a default value prevents the error. 
function sum(numbers = [2, 3]) {
    return numbers.reduce((a, b) => (a + b));
}
```
Mozilla documentation: [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters).

### Arrow Functions
Arrow function expressions are a syntactically compact alternative to a regular function expression. The arrow funciton does not have bindngs to `this`, `arguments` or `super`

```JS
// Parantheses can be omitted for singel value arguments an single rexpression bodies.
const double = x => x * x;    

// Returning an object literal from an arrow function.
const minMax = (numbers) => ({'min': Math.min(...numbers), 'max': Math.max(...numbers)});

// Arrow functions support Rest Prameters
const sum = (...rest) => rest.reduce((a, b) => a + b);

// Arrow functions support Default Prameters
const sum = (a, b = 5) => a + b;

```
Mozilla documentation: [Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### The includes() Function
The ES6 `includes()` method determines whether an array includes a certain value. 
```JS
let numbers = [1, 2, 3];

// ES6 includes() function returns true or false.
const found = numbers.includes(0);

// Before ES6, the indexOf() method, which returns the index or -1, had to be used.
const found = numbers.indexOf(0) != -1;
```
Mozilla documentation: [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

### Let & Const
The `let` and `const` keywords exists because of the behaviour of the older `var` keyword. They allow declaring variables limited to a scope of a block statement or the expression in which it is used, unlike the `var` keyword, which defines a variable globally, or locally to an entire function regardless of block scope. `let` and `const` does do not become properties of the window object, even when declared globally.

* The `let` statement declares a block scope local variable, optionally initializing it to a value.
* The value of a `const` can't be changed through reassignment, and it can't be redeclared. It is a read-only reference to a value, but it does not mean the value it holds is immutable.
```JS

// Primitive types declared with "const" can not be changed.
const example = 5;
example = 10;
console.log(example) // Error: SyntaxError: unknown: "example" is read-only

// Only the "const" reference is immutable, hence objects can be changed.
const example = [];
example.push(5)
console.log(example)

// Variables declared with "var" starts with the value "undefined". 
// "let" variables are not initialized until their definition 
// is evaluated. Accessing the variable before the initialization
// results in a ReferenceError. 
function myFunction() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```
Mozilla documentation: [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let).    
Mozilla documentation: [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const).

### Import & Export
```JS

```
