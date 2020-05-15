# JavaScript Notes

This file contains implementation of of the most important ES6+ examples and challenges from the [Scrimba](https://scrimba.com/) courses [Learn modern JavaScript](https://scrimba.com/g/ges6) and [Introduction to ES6+](https://scrimba.com/g/gintrotoes6).

## The `this` Keyword

The `this` keyword behaves somewhat differently in JavaScript compared to other languages. Use the below link for reference:

[Mozilla 'this'  documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

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

[Mozilla Template Literals documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

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

[Enhanced Object Literals in ES6](https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d)

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

[Mozilla Destructuring Assignment documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

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

[Mozilla 'for...of' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

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

[Mozilla Spread Syntax documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Rest Parameters

The rest parameter syntax (`function(...arguments)`) allows representing an unknown number of arguments as an array (similar to Java varargs).

```JS
// Summing an indefintate range of numbers.
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

const sum = add(1, 2, 3);
```

[Mozilla Rest Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

### Default Parameters

Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

```JS
// sum() called without an array would cause an error. Adding a default value prevents the error.
function sum(numbers = [2, 3]) {
    return numbers.reduce((a, b) => (a + b));
}
```

[Mozilla Default Parameters documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

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

[Mozilla Arrow Functions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### The includes() Function

The ES6 `includes()` method determines whether an array includes a certain value.

```JS
let numbers = [1, 2, 3];

// ES6 includes() function returns true or false.
const found = numbers.includes(0);

// Before ES6, the indexOf() method, which returns the index or -1, had to be used.
const found = numbers.indexOf(0) != -1;
```

[Mozilla 'Array.prototype.includes() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

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

[Mozilla let documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)  
[Mozilla 'const' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

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

[Mozilla 'import' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

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

 [Mozilla 'export' documentation](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

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

[Mozilla 'String.prototype.padStart()' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)  
[Mozilla 'String.prototype.padEnd()' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

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

[Mozilla Functions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)  
[Mozilla Closures documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

### Classes

ES6 classes are syntactical sugar over the existing prototype-based inheritance. Classes are special functions and equally to `function declarations` and `function expressions`, classes has `class expressions` and `class declarations`.

To define a class using class declaration, use the keyword `class`:

```JS
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Unlike functions declarations, which are hoisted, class declarations are not, hence the classes MUST be decleared before being uses.
const point = new Point();
```

Class expressions can, just like function expressions, be named or unnamed. The name of the named class is, also like function expressions, only local to the classes body, but it's accessible trough the classes `name` property. If no name is given, the name of the variable referencing the class is used.

Create an unnamed class using class expression.

```JS
let Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

// Outputs Point.
console.log(Point.name);
```

Create a named class using class expression.

```JS
let Coordinate = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

// Outputs Point.
console.log(Coordinate.name);
```

The body of a class is always executed in `strict mode` and can contain a `constructor` and `methods`. The constructor, used to initialize a class when created, is prefixed with `constructor`, and there can be only one in a class. Instance properties must be defined inside of class methods.Constructor values (also are instance properties) are mutable:

```JS
let Point = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

// Changing the instance property x, defined in the construtor..
Point.x = 2.0;
```

`get()`, or `set()` allows access to a property that returns a dynamically computed value, and can be used to reflect the status of an internal variable without requiring the use of an explicit method call. It is not possible to simultaneously have a getter bound to a property and have that property actually hold a value (i.e. the getter can not have the same name as the property it's exposes).

```JS
let Point = class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get area() {
    return calculateArea();
  }

  calculateArea() {
    return this.x * this.y;
  }
};

// Calls area().
const area = Point.area;
```

Field declarations are experimental and support is yet limited (without using a `transpiler` like [Babel](https://babeljs.io/)). Rely on instance properties instead:

```JS
let Point = class Point {
  // Public fields with and without default values.
  x = 0;
  y;
  // Private field.
  #area;
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.#area = x * y;
  }
};
```

Classes can have `static` methods, which are called without instantiating their defining class:

```JS
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distanceBetween(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// Calling static methods trough the instance is not allowed and will return "undefined".
p1.distance;

// Proper static method call.
Point.distanceBetween(p1, p2);
```

Classes have inheritance, and a constructor of a child class can call the constructor of a parent class with `super()`. Use the keyword `extends` to create a subclass:

```JS
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle extends Point {
  // Constructor parameters can have default values.
  constructor(x, y, radius = 1) {
    super(x, y);
    this.radius = radius;
  }

  get area() {
    return this.radius * 3, 14;
  }
}

const circle = new Circle(2, 4);
const area = circle.area;
```

Classes cannot `extend` regular (non-constructable) objects, but inheritance is still possible using `Object.setPrototypeOf()`:

```JS
const Point = {
  identify() {
    return this.id;
  }
};

class Shape {
  constructor(id) {
    this.id = id;
  }
}

// Shape now inherits Point.
Object.setPrototypeOf(Shape.prototype, Point);

let shape = new Shape(1);
console.log(shape.identify());
```

A class can only inherit from a singel class, hence multiple inheritance is not allowed. To mitigate this, for example to be able to use functionality in tooling classes, it's possible to use `mix-ins`, a function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins.

```JS
const calculatorMixin = Base =>
  class extends Base {
    calc() {
      console.log("calc()");
    }
  };

const randomizerMixin = Base =>
  class extends Base {
    randomize() {
      console.log("randomize()");
    }
  };

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}

// Bar now provides the methods implemented in the mix-ins.
const bar = new Bar();
bar.calc();
bar.randomize();
```

[Mozilla Classes documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)  
[Mozilla Getter Functions documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)

### Asynchronous JavaScript

Before 2012, callbacks were the only way of doing asynchronous programming in JavaScript. In 2012, promises where introduce in order to mitigate the problem with long, and hard to read and reason about, callback chains. Promises made asynchronous JavaScript a lot easier, but had itself its share of issues. Especially somewhat confusing error handling. ES2017 introduced the keywords `async` and `await`, which are used to add syntactic sugar on top of promises, making asynchronous code easier to write (and read) by making it appear procedural.

Programming asynchronous code using a promises:

```JS
const url = 'https://jsonplaceholder.typicode.com/users';

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json[0]));
}

getUsers();
```

Using `async` and `await` instead of promises:

```JS
const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json[0]);
}

getUsers();
```

Since an async keyword turns a function into a promise, a hybrid approach of promises and await is possible, and sometimes preferable in order to increase readability and improve error handling.

```JS
const url = 'https://jsonplaceholder.typicode.com/users';

async function getUsers() {
  const json = await fetch(url)
    .then(response=> response.json())
    .catch(error => console.log(error));
  console.log(json[0]);
}

getUsers();
```

Using `await` directly on the function call will block execution of any subsequent function call, which is inefficient if the application logic allows performing multiple asynchronous calls as the same time. Unnecessary blocking can be avoided by assigning the result to a variabel and awaiting the variable to get a value instead:

```JS
function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited two seconds.");
    }, 2000);
  });
}

function waitThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Waited three seconds.");
    }, 3000);
  });
}

// Completes after five seconds as the seconds call is not made until the first call returns.
async function asyncCallSlow() {
  const two = await waitTwoSeconds();
  const three = await waitThreeSeconds();
  console.log(two);
  console.log(three);
}

// Completes after three seconds as the calls are made concurrently.
async function asyncCallFast() {
  const two = waitTwoSeconds();
  const three = waitThreeSeconds();
  console.log(await two);
  console.log(await three);
}

asyncCallSlow();
asyncCallFast();
```

Waiting simultaneously for multiple promises to finish using `Promise.all()`:

```JS
function parallelPromise() {
  // Promise.all() returns a new promise when all the promises are resolved, leaving
  // to the caller to handle the result.
  return Promise.all([waitTwoSeconds(), waitThreeSeconds()]);
}

concurrentPromise().then((messages) => {
  console.log(messages[0]);
  console.log(messages[1]);
});
```

Combining `Promise.all()` with destructuring:

```JS
async function concurrentPromise() {
  const [val1, val2] = await Promise.all([waitTwoSeconds(), waitThreeSeconds()]);
  console.log(val1);
  console.log(val2);
}

concurrentPromise();
```

#### Error Handling

Compared to promises, async functions are less tricky when it comes to error handling since they allow using `try-catch` as if the code where synchronous. Chained promises hides the source of the exception. A `catch` on the other hand, is neither attached to the root promise nor the most recent promise; it is attached to the entire chain preceding it, which gives the user a choice of how to handle errors (e.g. by re-throwing the exception). In addition, the `try-catch` error stacks makes more sense than the ambiguous output created by failing promises. The latter tend to be large and makes it difficult to locate where the error originated, and, unless the exception is caught an re-thrown, the error points to the function from which the error originated.

Promise error handling:

```JS
function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json[0]))
    .catch(error => console.error(error));
}

getUsers();
```

`try-catch` error handling:

```JS
async function getUsers() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json[0]);
  } catch (error) {
    console.error(error);
  }
}

getUsers();
```

The synchronous `try-catch` solution leaves the granularity of the error handling to the user and, even with JavaScript's limited functionality for catching specific types, it's possible to be explicit.

```JS
const saveUser = async (user) => {
  try {
    const user = await saveUser(user);
    additionalAction(user);
  } catch (error) {
    // There is no "catch (HTTPError)".
    if (error instanceof HTTPError) {
      console.log('User could not be created:' + error);
    } else {
      // Let all other errors bubble up the stack.
      throw error;
    }
  }
};
```

While `try-catch`blocks usually are easier to reason about, there are ways to fail to handle errors originating from promises.

In the example below, an async method is called inside the `try-catch` block, but the code does not await, which causes a `UnhandledPromiseRejectionWarning` when the code in the called method throws.

```JS
async function throwError() {
    // When an error is thrown in an async method, a rejected promised will be returned,
    // carrying the thrown error, which is equivalent to "return Promise.Reject(error)".
    throw new Error("Thrown from thisThrows()");
}

try {
    throwError();
} catch (e) {
    console.error(e);
} finally {
    // ...
}
```

The situation is easy to mitigate; when returning a promise within a `try-catch` block, make sure to await it.

```JS
async function throwError() {
    throw new Error("Thrown from thisThrows()");
}

try {
    await throwError();
} catch (e) {
    console.error(e);
} finally {
    // ...
}
```

A related situation is when the async method is awaited, but the call is not made inside a `try-catch` block. If the async method returns a rejected promise (e.g. due to an exception), it will cause a `UnhandledPromiseRejectionWarning` if the promise reaches the `await` keyword and there is not `catch` in place to handle the error.

[Mozilla JavaScript Guide: Using 'async' and 'await'](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)  
[Mozilla JavaScript Guide: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)  
[Mozilla 'async' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
[Mozilla 'await' documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)  
[Error handling with Async/Await in JS](https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a)  
[7 Reasons Why JavaScript Async/Await Is Better Than Plain Promises](https://dev.to/gafi/7-reasons-to-always-use-async-await-over-plain-promises-tutorial-4ej9)

### Sets

Set are collections of unique values, which can be iterated over an listed after insertion order. In terms of quality (in order to evaluate uniqueness), the algorithm used is the same one as used in the `===` operator. +0 and -0 are considers to be equal. THat also aplies to NaN, which is equal to NaN, even if it's not the same object (NaN !== NaN).

A Set is created using the constructor `Set()`. Values can then be added or removed. Duplicate values will be ignored.

```JS
const values = new Set();

values.add(1);
values.add(5);
values.add(5);

// Remove the (single) 5.
values.delete(5);

// Verify that the 5 no longer exists.
values.has(5);
```

A set can also be initialized on creation by providing an array of values to the construtor. Duplicate values will be ignored:

```JS
const values = new Set([1, 5, 5]);

// Remove the (single) 5.
values.delete(5);

// Verify that the 5 no longer exists.
values.has(5);
```

[Mozilla Set documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
