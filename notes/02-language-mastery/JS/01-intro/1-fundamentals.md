# Key Takeaways

1. Data types
2. Variables
3. ES6
4. Conditionals

## Data Types

- There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.

## Variables

- Variables hold reusable data in a program and associate it with a name

- The var keyword is used in pre-ES6 versions of JS

### `let` is the preferred way to declare a variable when it can be reassigned, and `const` is the preferred way to declare a variable with a constant value

- let variables can be changed (reassigned ) after they’re created.
- const variables cannot be changed after they’re created.

- Variables that have not been initialized store the primitive data type `undefined`

### Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable

```js
let w = 4
w = w + 1

console.log(w)
```

We could re-write the code above to be:

```js
let w = 4
w += 1

console.log(w) // Output: 5
```

+= will add 1 to `w` and then reassign the value of w to that result.

### In ES6, template literals use backticks ` and ${} to interpolate values into a string

```js
const myPet = 'armadillo'
console.log(`I own a pet ${myPet}.`)
// Output: I own a pet armadillo.
```

- String concatenation is the process of joining strings together.
- String interpolation is the process of inserting, or interpolating, variables into strings using template literals.

## ES6

**TLDR** : To fully distinguish the difference between JavaScript and ECMAScript: if you want to create an app or program you can use JavaScript — if you want to create a new scripting language you can follow the guidelines in ECMAScript

- The company Netscape Communications introduced `JavaScript` as a scripting language in 1995 for web designers and programmers to interact with web pages.

- The next year Netscape submitted JavaScript to an organization called Ecma International to create standards for a scripting language (a type of programming language).

- In 1997, Ecma International released ECMA-262 which sets standards for the first version of a scripting language called ECMAScript, shortened to `ES`.

- So, when you see ES6 or JavaScript ES6, it means that that version of JavaScript is following the specifications in the sixth edition of ECMAScript!

- despite the release of newer versions (ES7, ES8), ES6 is the biggest update made to ECMAScript since the first edition released in 1997! it's refer to as “Modern JavaScript” because of all the major additions.

```md
- new keywords like let and const to declare variables
- new function syntax using Arrow functions
- creation of Classes
- parameters with default values
- promises for asynchronous actions
  and many more!
```

- ES6 ultimately allows programmers to save time and write more concise code.

Take for example pre-ES6 syntax for function expressions:

```js
var greeting = function () {
  console.log('Hello World!')
}
```

With ES6 arrow functions, we can transform the expression above into:

```js
const greeting = () => console.log('Hello World')
```

## Conditionals

- The general purpose of a conditional statement is to evaluate code as either true or false

- There are three logical operators:

  1. the and operator `&&`
  2. the or operator `||`
  3. the not operator, otherwise known as the bang operator `!`

- When using the `&&` operator, both conditions must evaluate to true for the entire condition to evaluate to true and execute. Otherwise, if either condition is false

The logical and operator, `&&`, or “and”, checks if both provided expressions are truthy

```js
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!')
} else {
  console.log('Stop')
}
```

- If only one of the conditions must evaluate to true for the overall statement to evaluate to true, we use the `||` operator

```js
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!')
} else {
  console.log('Do some work.')
}
```

- The bang operator, `!`, switches the truthiness and falsiness of a value

The `!` not operator reverses, or negates, the value of a boolean

```js
let excited = true
console.log(!excited) // Prints false

let sleepy = false
console.log(!sleepy) // Prints true
```

- We can simplify an `if...else` statement, by using a ternary operator :

instead of

```js
let isNightTime = true

if (isNightTime) {
  console.log('Turn on the lights!')
} else {
  console.log('Turn off the lights!')
}
```

we can use this

```js
isNightTime
  ? console.log('Turn on the lights!')
  : console.log('Turn off the lights!')
```
