# Key Takeaways

1. HOF : Higher-Order Functions

   - Functions as data
   - Functions as parameters

2. Iterators :

   - forEach()
   - map()
   - filter()
   - findIndex()
   - reduce()
   - Choose the right iterator

## Higher-Order Functions

We can work with functions the same way we work with any other type of data, including reassigning them to new variables.

```js
const test = testMyProgram()

testMyProgram() // This function call barely takes any space!
```

> test is a variable that holds a reference to our original function.

JavaScript functions are first-class objects, so they have properties and methods like any other object.

- Functions can be passed into other functions as parameters

```js
const higherOrderFunc = (param) => {
  param()
  return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
  return "I'm being invoked by the higher-order function!"
}

higherOrderFunc(anotherFunc)
```

or with an anonymous function (a function without a name) that counts to 10

```js
higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
})
```

- A higher-order function is a function that either accepts functions as parameters, returns a function, or both.

## Iterators

🎯 learning goal : learn the syntax for these methods, their return values, how to use the documentation to understand them, and how to choose the right iterator method for a given task.

- `.forEach()` is used to execute the same code on every element in an array but does not change the array and `returns undefined`.

```js
groceries.forEach((groceryItem) => console.log(groceryItem))
```

- `.map()` **executes** the same code on every element in an array and **returns a new array with the updated elements**.

```js
const numbers = [1, 2, 3, 4, 5]

const bigNumbers = numbers.map((number) => {
  return number * 10
})
console.log(bigNumbers)

// output : [10,20,30,40,50]
```

- `.filter()` checks every element in an array to see if it satistfies certain condition and returns a new array with the elements that return truthy

```js
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']

const shortWords = words.filter((word) => {
  return word.length < 6
})

console.log(words) // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords) // Output: ['chair', 'music', 'brick', 'pen', 'door']
// words was not mutated, i.e. changed, and shortWords is a new array
```

- `.findIndex()` returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

- `.reduce()` iterates through an array and takes the values of the elements and returns a single value.

```js
const numbers = [1, 2, 4, 10]

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100) // <- Second argument for .reduce()

console.log(summedNums) // Output: 117
```

| `Iteration` | `accumulator` | `currentValue` | `return value` |
| ----------- | ------------- | -------------- | -------------- |
| First       | 100           | 1              | 101            |
| Second      | 101           | 2              | 103            |
| Third       | 103           | 4              | 107            |
| Fourth      | 107           | 10             | 117            |
