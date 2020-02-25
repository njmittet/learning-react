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

Mozilla [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) documentation.

## Enhanced Object Literals

ES6 enhances declaration of object literals by adding:

* Adding shorthand for object initializing from variables by removing repetition when variable names and object prperties are equal.
* Adding shorthand for writing methods in (and returned from) objects.
* Introducing computation of property names.

```JS
// Checking if a property key has a corresponding variable name and assigns the value
// of that variable to the property. Instead of: return {make: make, model: model}.
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

Mozilla [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) documentation.

## Enhanced for-loop (for-of loop)

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

Mozilla [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) documentation.

### The Spread Syntax

The spread syntax (`...`) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (function calls) or elements (array literals) are expected.

```JS
// Copies values from one array to another by value.
const numbers = [1, 2, 3];
const numbersCopy = [...numbers1];

// Pushing a new value on to the source array does not changeWith the array holding the copied values.
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

Mozilla [Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) documentation.

### Rest Parameters

The rest parameter syntax (`function(...arguments)`) allows representing an unknown number of arguments as an array (similar to Java varargs).

```JS
// Summing an indefintate range of numbers.
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

const sum = add(1, 2, 3);
```

Mozilla [Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) documentation.

### Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```JS
// sum() called without an array would cause an error. Adding a default value prevents the error.
function sum(numbers = [2, 3]) {
    return numbers.reduce((a, b) => (a + b));
}
```

Mozilla [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) documentation.

### Arrow Functions

Arrow function expressions are a syntactically compact alternative to a regular function expression. The arrow function does not have bindngs to `this`, `arguments` or `super`

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

Mozilla [Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) documentation.

### The includes() Function

The ES6 `includes()` method determines whether an array includes a certain value.

```JS
let numbers = [1, 2, 3];

// ES6 includes() function returns true or false.
const found = numbers.includes(0);

// Before ES6, the indexOf() method, which returns the index or -1, had to be used.
const found = numbers.indexOf(0) != -1;
```

Mozilla [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) documentation.

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

Mozilla [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) documentation.
Mozilla [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) documentation.

### Import

The `import` statement is used to import bindings exported by another module or file.

Imported modules are always in strict mode.

The `import` statement cannot be used in embedded scripts unless such script has a type="module".

The `module-name` in the below code exampels are either a relative or absolute path name to the `.js` file containing the module. Bundlers may or may not require the use of the extension.

```JS
// Import the default export from a module.
import export from 'module-name';

// Import one or more not-default exports from a module.
import { export1, export2 } from 'module-name';

// The * inserts a module into the current scope, allowing
// usage of the module name as a namespace.
import * as myModule from 'module-name';
myMOdule.callMyMethod();

// Imports can be renamed.
import { longModuleName as module } from 'module.name';
```

Mozilla [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) documentation.

### Export

The `import` statement is used to import bindings exported by another module or file. The `export statement` is used to export functions, objects, or primitive values from a module so they can be used by other programs with the `import` statement. Exported modules are always in strict mode.

There are two different types of export, `named` and `default`.
A module can have multiple named exports but only one default export.

```JS
// Export already declared features as names exports.
// Renaming is supported while exporting.
export { myFunction, myVariable as variabel };

// Export features as named exports.
export let myVariable = Math.sqrt(2);
export function myFunction() { ... };

// Export already declared feature as default.
export { myFunction as default };

// Export features as default.
export default myFunction() { ... }
export default class { ... }

// It's possible to export features from a parent module.
export foo from 'module-name';
```

Mozilla [export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) documentation.

### padStart() & padEnd()

The `padStart()` method pads the start of the current string with a given string (repeated, if needed) until the string reaches a given length. `padEnd()` similarly pads the end of the string.

```JS
// Use padStart() to mask all but the two last digits of a phone number.
const phoneNumber = '22002201';
const lastTwo = phoneNumber.slice(-2);
const maskedNumber = lastTwo.padStart(phoneNumber.length, '*');

// Use padEnd() to mask all but the two first digits of a phone number.
const phoneNumber = '22330033';
const firstTwo = phoneNumber.slice(0, 2);
const maskedNumber = firstTwo.padEnd(phoneNumber.length, '*');
```

Mozilla [String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) documentation.
Mozilla [String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd) documentation.

### Functions

Javascript function are first-class objects that can have properties and methods like any other object, but opposed to other objects, they can be called. Arguments passed to functions are `by value`. If a function changes the value of an argument, this changeWith is not reflected globally or in the calling function, bt since objevct references also are values, changes to a referred object's properties will be visible outside the function. `this` does not refer to the currently executing function, hence the functions name most be used to refer to the executing function, even within the function body.

The most common ways to define functions are:

#### Function Declarations

A function created with a function declaration is a Function object, and are hoisted to the top of the enclosing function or global scope, hence it can be used before it's declared.

```JS
multiply(2, 2);

function multiply(x, y) {
  return x * y;
}
```

#### Function Expressions

A function expression is similar to and has the same syntax as a function declaration, but a function expression may be a part of a larger expression. The main difference between a function expression and a function declaration is the functions name can be omitted, which create anonymous function, most commonly either assigned to a variable or as [callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function). In addition, function expressions are not hoisted and can not be used before being declared.

```JS
var multiply = function(x, y) {
  return x * y;
};
```

A function expression used as callback.

```JS
function process(callback, x, y) {
  callback(x, y;
}
```

If the function expression is named, the name is only local to the function body, allowing for referencing the function within function (e.g. for recursion). The variable the function expression is assigned to will have a `name` property, with the name of the function as value. In the below example, `fact.name` will be `factorial`.

```JS
var fact = function factorial(i) {
  if (i <= 1) {
    return 1;
  }
  return i * factorial(i - 1);
};
```

Another benefit of creating a named function expression is that in case we encounter an error, the stack trace will contain the name of the function, making it easier to find the origin of the error.

```JS
var multiply = function multiply(x, y) {
  return x * y;
};
```

#### The Function Constructor

As all other objects, Function objects can be created using the new operator, but creating a Function object using the constructor is not recommended since it needs the function body as a string which may prevent some JS engine optimizations and can also cause other problems.

```JS
var multiply = new Function('x', 'y', 'return x * y');
```

#### Immediately Invoked Function Expressions

Function expressions are often used to create Immediately Invoked Function Expressions, which is lexical scoped function expressions that are executed immediately. Variables within the expression can not be accessed from the outside.

The anonymous function expression is sorrounded by the grouping operator `()`, preventing access to variables within the function. The second `()` creates the immediately invoked function expression, making the function being immediately interpreted.

```JS
(function () {
    statements
})();
```

Assigning the function to a variable stores the function's return value, not the function definition itself.

```JS
var result = (function() {
  return 2 * 2;
})();

// Outputs 4.
console.log(result);
```

Using arrow functions as immediately invoked functions is also possible:

```JS
var result = (() => 2 * 2)();
```

#### Closures (Module Pattern)

Closures are created every time a function is created, at function creation time, and provides access to an outer function's scope from an inner function. A closure is a function with references to it's lexical environment (surrounding state). A closure (function) can be assigned to a variable and called after execution, with it's local variables still accessible. Closures are useful because they associate data with a function that operates on that data, which has parallels to object-oriented programming.

A common pattern when using closures is the `Module Pattern`. Closures can be used to emulate private methods since methods (the public methods) with access to variables and other (private) methods are returned (as in the return value of Immediately Invoked Function Expressions) and can be assigned to a variable.

```JS
var counter = (function() {
  var counter = 0;
  function changeWith(val) {
    counter += val;
  }
  return {
    increment: function() {
      changeWith(1);
    },
    decrement: function() {
      changeWith(-1);
    },
    value: function() {
      return counter;
    }
  };
})();

counter.increment();
counter.increment();
counter.decrement();

// Outputs 1.
console.log(counter.value()); 
```

Mozilla documentation: [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)  
Mozilla documentation: [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)