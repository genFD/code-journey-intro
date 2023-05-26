# Types

## Table of contents

- [`📖` Resources](#resources)
- [`📚` Other Useful resources](#other-useful-resources)
- [`📝` Notes](#notes)
  - [`🧱` Primitive Types](#primitive-types)
    - [`⎨⎬` Object Subtypes](#object-subtypes)
  - [`⎨⎬` Fundamentals Objects](#fundamentals-objects)
  - [`🔄` Types coercion](#types-coercion)
  - [`⩵` Equality](#equality)

## Resources

TODO: Add resources

## Other Useful resources

TODO: Add resources

## Notes

### Primitive Types

There are 7 kinds of data (types) that we use in JavaScript:

| Types       | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                     | Examples                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| _string_    | characters wrapped in single or double quotes                                                                                                                                                                                                                                                                                                                                                                                                  | `"Sample String"`                                     |
| _number_    | any number without quotes                                                                                                                                                                                                                                                                                                                                                                                                                      | `23.8879`                                             |
| _boolean_   | the value true or false                                                                                                                                                                                                                                                                                                                                                                                                                        | `true`                                                |
| _null_      | ☞ `TODO: update definition`                                                                                                                                                                                                                                                                                                                                                                                                                    | ~                                                     |
| _symbol_    | ☞ `TODO: update definition`                                                                                                                                                                                                                                                                                                                                                                                                                    | ~                                                     |
| _undefined_ | ☞ `TODO: update definition`                                                                                                                                                                                                                                                                                                                                                                                                                    | ~                                                     |
| _object_    | data structure used to store information (properties) or methods which perform actions. We can access properties by using the . dot operator. 'Hello'.length or 'hello'.toUpperCase(). We're able to build our own objects but there are other objects built into JavaScript. For example, JavaScript has the built-in `Math` object that has collections of methods and properties to perform more complex mathematical operations and more.. | `{id: 1, sayHello: function(){ console.log('Hello')}` |

#### Object Subtypes

- `function`
- `array`

### Fundamentals Objects

(aka native function)

> ☞ `TODO: update definition`
> These are objects representation of certain types. It's not necessary to use them.

Should be used the `new` keyword to construct :

- `Object`
- `Array`
- `Function`
- `Date()`
- `RegExp()`
- `Error()`

```js
const date = new Date('May 25th 2018')
date.toUTCString()
// Output: wed, 06 march 2019 06:00:00 GMT
```

Not recommended to use the `new` keyword to construct

- `String()`
- `Number()`
- `Boolean()`

You should use them as functions, because they coerced any value to that respective primitive type.

```js
const testScore = String(85)
date.toUTCString()
// Output: "85"
```

### Types coercion

`🎯` Goal : Raising awareness on certain type coercion corner cases that might cause bugs

#### String()

- _Job_: takes any value and returns a string representation of that value

- _Some String coercion corner cases_ :

```js
String(-0) // Ouput '0'
String(null) // Ouput 'null'
String(undefined) // Ouput 'undefined'
String([null]) // Ouput ''
String([undefined]) // Ouput ''
```

#### Number()

- _Job_: takes any value and returns a number representation of that value

- _Some Number() coercion corner cases_ :

```js
Number('') // Ouput 0
Number(' \t\n') // Ouput 0
Number(null) // Ouput 0
Number(undefined) // Ouput 0
Number([]) // Ouput NaN
Number([1, 2, 3]) // Ouput 0
Number([null]) // Ouput 0
Number([undefined]) // Ouput 0
Number({}) // Ouput NaN
```

#### Boolean()

- _Job_: takes any value and returns a boolean representation of that value

- _Comment_: it's a look up table. Certain values are considered falsy and if they don't they immediately fall into the truthy category

- _Falsy values_:

```mdx
""
0, -0
null
NaN
false
undefined
```

- **Coercion with string** : template literals

```js
let numOfstudents = 10
console.log(`there are ${numOfstudents} students `)
// the + operator is overloaded (it performs math operation and string concatenation). To decide whether to perform math operation or string concatenation, the spec says if "either of the value is a string the + operator prefers string concatenation". a to string operation is performed on numOfstudents.
```

- **Coercion with numbers** : performing calculation based on user's input (from a form element)

```js
function addStudents(userInput) {
  return numOfStudents + 1
}
addStudents('2')
// Ouput the string '21' again the reason is because the spec says "if either one of them is string the + operator prefers string concatenation" so if the user input is a string the function returns the string 21 which is the results of concatenating "2" + "1"
```

> **Note: I believe If you use Typescript you can prevent this .**

- **Coercion with boolean**: Making if and else statement

```js
// Has this variable been set or not?

let listOftudents = getStudentsList() // API call

//if listOftudents is not set it becomes undefined which coerced into a boolean here becomes falsy then the logic inside falls apart

if (listOftudents) {
  //do something with list
}

// This is not explicit
if (users.length) {
  user.map((user) => <li>{user.name}</li>)
}

// This is more explicit:
if (users.length > 0) {
  user.map((user) => <li>{user.name}</li>)
}

//the logic is explicit, loop and display the list of user's name if the length is greater that 0
```

> ☞ `TODO: clarify this note`

> **Note for coercion: If expect an object, null or undefined, it's ok to coerce expected value into a Boolean. String and number have too many corner cases.**

- **Boxing**: calling a method on a primitive value

```js
'hello'.length

// under the hood, JS coerce hello into something that behaves as an object.
//everything in JS is an object? no Boxing is what happened UDH
```

### Equality

**⚠️Big takeaway⚠️** : if the types are the same, double equal does triple equal (perform strict equality comparison). if the types are different then double equal allow coercion and triple equal return false immediately

#### How does double equal perfoms coercion?

Undefined and null are treated as equal.

- If x is null and y is undefined, return true
- If x is undefined and y is null, return true

```js
let numberOfStudents = null
let numberOfPaidStudents = someObject.value
if (numberOfStudents == numberOfPaidStudents) {
  // returns true if( someObject.value = undefined)
}
```

- Perform numerical comparison (call Number() on x or y) if x or y is string, number or boolean

```js
let numberOfStudents = 30
let numberOfPaidStudents = someObject.value
if (numberOfStudents == numberOfPaidStudents) {
  //1. numberOfPaidStudents = '30' // returns true because Number('30') = 30 and 30 === 30 is true
  //2. numberOfPaidStudents = false // returns false because Number(false) = 0 and 30 == 0 returns false
}
```

- If x or y is not a primitive(object or array) coerce the non-primitive value into a primitive

**Note this example is contrived, it's included here to prove a point, in reality you should always reduce the surface area of x and y in your code to avoid comparing a primitive to a non-primitive value.**

```js
let num = 30
let numArr = [30]
if (num == numArr) {
  //1. Stringify non-primitive value
  // (30 == String([30])
  // (30 == '30')
  //2. Prefers numerical comparison when types are different
  // (30 == Number('30'))
  // (30 == 30)
  //2. type are the same, so switch to strict equality `===`
  // (30 === 30)
  // returns true
}
```

#### Corner cases

```js
let students = []
if (students) {
  // (returns true)
  //do something
}
if (students == true) {
  // 1. double equal comparison between non-primitive and primitive. Array is coerced into a primitive,
  // (String([]) ==  true)
  // 2.it becomes an empty string
  // ("" ==  true)
  //3. two primitves of different types, == prefers numerical comparison so empty string becomes 0 and false 1
  // ("" ==  true)
  // (0 ==  1)
  //4. two primitves of same types, strict equality ===
  //(0 === 1 )// returns false
  //do something
}
```

- Implicit coercion(`Boolean()`) in the first example is better than explicit comparison in example 2
- Avoid `==` with non-primitive values
- Avoid `==` when you don't know the types, use `===` it signals to the reader that you don't know the types, you're protecting yourself (it returns false when types are differents).

- if you know the types and they're different `===` you have two options :

1. Don't compare at all
2. use `==` keep in mind how coercion works with `==`

- Avoid `== true` or `== false`. Allow `Boolean()` or use `===`
