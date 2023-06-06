# JS Under the hood

## Table of contents

- [📖 Resources](#resources)
- [📚 Other Useful resources](#other-useful-resources)
- [🎯 Learning Objectives](#learning-objectives)
- [📝 Notes](#notes)
  - [Thread of execution](#thread-of-execution)
  - [Callstack](#callstack)
  - [Callbacks & Higher Order functions](#callbacks--higher-order-functions)
  - [Closure](#closure)
  - [Classes/Prototypes & Asynchronicity](#classesprototypes--asynchronicity)

## Resources

> ☞ TODO: Add resources links

## Other Useful resources

> ☞ TODO: Add resources links

## Learning Objectives

- Gain an insight into how your JavaScript program executes under the hood.
- Level up the code composition of your applications by learning about different programming design patterns.
- Recognize common design patterns in JavaScript.
- Identify the ways currying and hoisting contribute to how JavaScript works under the hood.
- Understand the concurrency module and event loop in JavaScript.

## Notes

### Currying in JavaScript

**[⬆ back to top](#table-of-contents)**

`Currying is a functional programming technique`.

We can use currying to write code that is `modular, easy to test, and highly reusable`.

`What is functionnal programming?`

Functional programming is a `declarative paradigm that emphasizes immutability and pure functions` — meaning the function is side-effect free and for any given input it will always return the same output.

#### How currying works

**[⬆ back to top](#table-of-contents)**

In order to understand the point of currying and how it works, we can first look at a non-curried function.

```js
function add(a, b) {
  return a + b
}
```

we’ve created a non-curried function add(). add() will still execute if called with a missing argument, which would result in the missing variable being evaluated as `undefined`.

the function call would evaluate as `1 + undefined` and return `NaN`. That’s not great and could be tricky to debug in practice.

Let’s curry the `add()` function to see how we can handle the function call better if only one argument is available. What we can do is transform the `add()` function, which normally expects multiple arguments, into a series of nested functions that will each take a single argument.

This makes the function calls more modular. With curried functions, `calling the outer function returns the next function in the chain and so on until the innermost function is called, which then returns a value`.

In code that would look like this:

```js
// traditional function
function add(a, b) {
  return a + b
}

// curried function
function curried_add(a) {
  // The outer function returns a nested single-argument function
  return function nested_func(b) {
    return a + b
  }
}
```

**Note**: The returned function can also be anonymous, but has a name in this example for clarity.

- Calling the outer function `curried_add()` returns `nested_func()`.
- Calling nested_func uses the arguments supplied from calling `curried_add` and `nested_func` to return the evaluated result of a + b.

You can call that in your code as `curried_add(a)(b)`, which invokes curried_add(), then invokes `nested_func()` immediately following the first function call.

In the code block below, we are assigning the result of calling `curried_add()` to a variable named `add_one`.

```js
let add_one = curried_add(1)
// returns nested_func()
```

Now, when we call `add_one()`, it will return the value of a + b, because it is the function `nested_func()`.

```js
add_one(10)
// returns 11
```

The argument from calling `curried_add()` is available to the nested functions due to `closure`. A closure means that `the nested function retains the scope of parent functions` based on where the function is defined, `even if the nested function is executed outside of that lexical scope`.

Overall, that means that when you run the line let add_one = curried_add(1); , add_one() will retain the scope from curried_add() and therefore have access to the variable created for the argument a as 1, which you can see explained in the code snippet line by line:

```js
function curried_add(a) {
  // has access to the argument for a
  return function nested_add(b) {
    // has access to the arguments for a and b
    return a + b
  }
}

// creates a local variable a and assigns it the value 1
let add_one = curried_add(1)

// add_one() still has access to the argument from curried_add()
add_one(10)
```

#### Currying with Arrow Functions

**[⬆ back to top](#table-of-contents)**

The same curried_add() function from earlier can be rewritten much more concisely using ES6 arrow function syntax:

```js
let curried_add = (a) => (b) => a + b
```

Let’s break that down:

- let curried_add is a variable assignment to the outer arrow function, `a => ....`
- Calling `curried_add` takes an argument `a` and returns `b => a + b`.

- Invoking the second arrow function returns the sum, or `a + b`.

```js
function changeColor(color) {
  return function (obj) {
    obj.color = color
  }
}

// ES6 version
const changeColorArrow = (color) => (obj) => (obj.color = color)
```

#### Currying in Context

**[⬆ back to top](#table-of-contents)**

Now that we understand the basics of how currying works, let’s look at a use case that’s more interesting than addition.

For this example, a social sports league company needs a way to `filter through an array of players` from various cities, sports leagues, and age brackets `to generate some graphs about their player data in a dashboard`.

PB: Each time they generate a list of filtered values, `they have to repeat filters that iterate over the entire players array`, so they want to modify their code.

```js
const players = [
  {
    age: 5,
    sport: 'soccer',
    city: 'Chicago',
    dateJoined: new Date('2021-01-20'),
  },
  {
    age: 6,
    sport: 'baseball',
    city: 'Boulder',
    dateJoined: new Date('2019-12-30'),
  },
  {
    age: 10,
    sport: 'soccer',
    city: 'Chicago',
    dateJoined: new Date('2020-11-12'),
  },
  {
    age: 11,
    sport: 'handball',
    city: 'San Francisco',
    dateJoined: new Date('2020-08-21'),
  },
  {
    age: 6,
    sport: 'soccer',
    city: 'Chicago',
    dateJoined: new Date('2021-07-06'),
  },
  {
    age: 8,
    sport: 'softball',
    city: 'Boulder',
    dateJoined: new Date('2019-02-27'),
  },
  {
    age: 7,
    sport: 'tennis',
    city: 'San Francisco',
    dateJoined: new Date('2019-05-31'),
  },
  {
    age: 4,
    sport: 'handball',
    city: 'San Francisco',
    dateJoined: new Date('2018-03-10'),
  },
]
```

Let’s say they’re interested in `seeing all players from the city of San Francisco sorted by age` as well as `seeing all players in San Francisco who play handball`. We can `filter over the array of objects to grab the relevant objects`, then `sort the results or do additional filtering`.

```js
const sortPlayersByValueFromCity = (playersArr, city, sortKey) => {
  return playersArr
    .filter((player) => {
      return player.city === city
    })
    .sort((a, b) => {
      return a[sortKey] - b[sortKey]
    })
}

console.log(sortPlayersByValueFromCity(players, 'San Francisco', 'age'))
```

`sortPlayersByValueFromCity()` takes three arguments:

- an array of players
- the city to filter by
- a sort key to sort by

The function filters the array of objects by the city key, then sorts by the sort criteria.

```js
const filterPlayersByValueFromCity = (
  playersArr,
  city,
  filterKey,
  filterValue
) => {
  return playersArr
    .filter((player) => {
      return player.city === city
    })
    .filter((playersFromCity) => playersFromCity[filterKey] === filterValue)
}

console.log(
  filterPlayersByValueFromCity(players, 'San Francisco', 'sport', 'handball')
)
```

`filterPlayersByValueFromCity()` takes four arguments:

- an array to filter
- a city to filter the array by
- an additional filter key,
- the matching filter value to search for

The function filters by the city then filters the results by the key-value pair.

Let’s make the code more modular with currying to eliminate potential problems in the code and to avoid repeating the repetitive filter operations.

##### Identify errors faster

**[⬆ back to top](#table-of-contents)**

if we call `filterPlayersByValueFromCity(players, "San Fran", "sport")` like this, the returned result is going to be an empty array. there are several things wrong with that function call, but it will still run and it will be unclear why an empty array was returned. The errors include:

- San Francisco is input as San Fran.
- The fourth argument is missing.

##### Make Code Easier to Read and Reuse

**[⬆ back to top](#table-of-contents)**

The code for `sortPlayersByValueFromCity()` and `filterPlayersByValueFromCity()` is hard to read.
With currying, we can do this :

- write functions that handle one task
  **Benefits**: therefore not only easier to read and understand, but more reusable.

For example, we can create a curried function that do this

- filters an array of objects by a provided key and value

```js
const setFilter = (array) => (key) => (value) =>
  array.filter((x) => x[key] === value)

const filterPlayers = setFilter(players)
const filterPlayersByCity = filterPlayers('city')
const filteredPlayersBySanFrancisco = filterPlayersByCity('San Francisco')
const filterPlayersBySport = filterPlayers('sport')
const filteredPlayersBySoccer = filterPlayersBySport('soccer')

console.log(filteredPlayersBySanFrancisco) // Returns an array of players from San Francisco
console.log(filteredPlayersBySoccer) // Returns an array of players that play soccer
```

##### Make Code More Modular

**[⬆ back to top](#table-of-contents)**

Now we can reuse the filtered San Francisco object for additional specialized functions. Let’s use it to sort the players by the date they joined the sports league.

```js
const sortArrayByValue = (sortArray) => (sortKey) => {
  return sortArray.sort(function (a, b) {
    if (a[sortKey] < b[sortKey]) {
      return -1
    }
    if (a[sortKey] > b[sortKey]) {
      return 1
    }
    return 0
  })
}

const sortSanFrancisco = sortArrayByValue(filteredPlayersBySanFrancisco)
const sortSFByDateJoined = sortSanFrancisco('dateJoined')
console.log(sortSFByDateJoined)
```

### Hoisting in JavaScript

What happens during the compilation phase ?

- the JavaScript engine `allocates memory to save the names of declared variables and functions` by `hoisting` variable and function declarations `to the top of their current scope`.

Does hoisting means that JS move your code around ?

**No**: instead, it:

- Finds all of the variable and function declarations in the code
- ‘Raises’ the variable names and function declarations to the top of their scope before code execution
- Immediately initializes function declarations
- Postpones handling initialization, or assignment of values, until the code is executed

> Ok, so what's the advantage of hoisting?

one of the advantages is

- you can call a function on a line of code that is before the line of code where you actually declare the function.

> Ok, so we know the def, we know what hoisting means as far the compilation phase, we know one advantage of hoisting, is there something else we're missing?

**yes** :

- There are subtle hoisting differences between function declarations, function expressions, and variable declarations, which are important to understand to avoid errors in your code.

> ok what are the differences?

- For functions declarations, JS hoist functions declarations including the function body, to the top of its scope, which means that If a function is declared at the global level, then it is raised to the top of the global scope. Hoisting also occurs within nested functions, so nested functions are raised to the top of the enclosing function scope.

A function declaration can be called from anywhere within the scope as long as it is in fact declared in the code.

```js
console.log(add(1, 2))
// prints 3

function add(a, b) {
  return a + b
}
```

- for function expressions, the hoisting rules apply for variable declarations. but there are two cases depending on whether we use `var` or (`let` or `const`).

  - `var` variables are hoisted to the top of function blocks, but not other types of blocks(for loop, if and else statement), so you have to be careful when using var to declare variables to ensure you have the intended value when the variable is used. `var` variables are initialized as undefined when they are hoisted,which can lead to unexpected results in code.

For example, myVarVariable behaves the same way here:

```js
console.log(myVarVariable) // outputs undefined
var myVarVariable = 1

// or

var myVarVariable // undefined
myVarVariable = 1
```

- `let` and `const` are hoisted to the top of their parent block for scope, so any type of block or function can be the parent scope for those variables. for `let` and `const` differ from var in how they initialize as well; while the names are hoisted, they are not initialized. So calling a variable in your code before it is initialized results in a ReferenceError. This is one of the reasons let and const are preferable, as a ReferenceError will immediately alert you to the problem in your code

### Concurrency Model and Event Loop in JavaScript

> How JavaScript uses its event loop to emulate concurrency ?

#### Why Do We Need an Event Loop?

`JavaScript is a single-threaded language`.

- What does it mean?

it means that two statements (lines of code) can’t be executed simultaneously.

For example, if you have a `for loop` that takes a 1 min to process, it’ll have to finish executing before the rest of your code runs. That results in blocking code.
But we can run non-blocking code in JavaScript, which is where the Event Loop comes in.
Let’s look at an example of blocking and non-blocking code.

`blocking code`:

```js
console.log("I'm learning about")

for (let idx = 0; idx < 999999999; idx++) {}

// The second console.log() statement is
// delayed by the for loop's execution
console.log('the Event Loop')
```

`non-blocking code`:

```js
console.log('I’m learning about')
setTimeout(() => {
  console.log('Event Loop')
}, 2000)
console.log('the')
```

#### Concurrency in JavaScript

Since JavaScript is single-threaded, as we saw in the for loop example, we’ll never have that flavor of “true” concurrency. However, we can emulate concurrency using the event loop.

##### What Is the Event Loop?

`At a high level, the event loop is a system for managing code execution.`

`overview of how the parts that make up the event loop fit together.`

![Event loop](/notes/02-language-mastery/assets/JavaScript-Engine-Diagram.webp)

##### Understand the Components of the Event Loop

The event loop is made up of these parts:

1. Memory Heap
2. Call Stack
3. Event Queue
4. Event Loop
5. Node or Web APIs

- The Heap

The heap is a `block of memory` where we `store objects in an unordered manner`.
JavaScript variables and objects that are currently in use are stored in the heap.

- The Call Stack

The stack, or call stack is a `tool` that `tracks what function is currently being run` in your code.
When you invoke a function

1. a frame is added to the stack. Frames connect that function’s arguments and local variables from the heap.

2. Frames enter the stack in a last in, first out (LIFO) order.

In the code snippet below, a series of nested functions are declared, then foo() is called and logged.

```js
function foo() {
  return function bar() {
    return function baz() {
      return 'I love CodeCademy'
    }
  }
}
console.log(foo()()())
```

![Call stack](/notes/02-language-mastery/assets/JS-Callstack-5.svg)

You might have noticed that `global()` is at the bottom of the stack–when you first initiate a program, the global execution context is added to the call stack, which contains the global variable and lexical environment.

- The Event Queue

The event queue is a `list of messages` `corresponding to functions that are waiting to be processed`

In the diagram, these messages are entering the event queue from sources such as various web APIs or async functions that were called and are returning additional events to be handled by the stack.Messages enter the queue in a first in, first out (FIFO) order. No code is executed in the event queue; instead, it holds functions that are waiting to be added back into the stack.

- The Event Loop

This event loop is a specific part of our overall event loop concept. Messages in the queue are added back to the stack via the event loop. When the call stack is empty, if there is anything in the event queue, the event loop can add those one at a time to the stack for execution.

1. First the event loop will poll the stack to see if it is empty.
2. It will add the first waiting message.
3. It will repeat steps 1 and 2 until the stack has cleared.

##### The Event Loop in Action

Now that we know all of the pieces of the event loop, let’s walk through some code to understand the event loop in action.

```js
console.log('This is the first line of code in app.js.')

function usingsetTimeout() {
  console.log("I'm going to be queued in the Event Loop.")
}
setTimeout(usingsetTimeout, 3000)

console.log('This is the last line of code in app.js.')
```

1. `console.log("This is the first line of code in app.js.")`; is added to the stack, executes, then pops off of the stack.

2. `setTimeout()` is added to the stack.

3. setTimeout()’s callback is passed to be executed by a web API. The timer will run for 3 seconds. After 3 seconds elapse, the callback function, usingsetTimeout() is pushed to the Event Queue.

4. The Event Loop, meanwhile, will check periodically if the stack is cleared to handle any messages in the Event Queue.

5. console.log("This is the last line of code in app.js."); is added to the stack, executes, then pops off of the stack.

6. The stack is now empty, so the event loop pushes usingsetTimeout onto the stack.

7. console.log("I'm going to be queued in the Event Loop."); is added to the stack, executes, gets popped

8. usingsetTimeout pops off of the stack.

#### Behind the Scenes

### Thread of execution

### CallStack

### Callbacks & Higher Order functions

### Closure

### Classes/Prototypes & Asynchronicity
