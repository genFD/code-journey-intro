# LANGUAGE MASTERY JS - TIMER APP

## Table of contents

- [💻 Application Overview](#overview)
  - [🥷🏽 The challenge](#the-challenge)
  - [📸 Screenshot](#screenshot)
  - [🔗 Links](#links)
- [🪜 My process](#my-process)
  - [⚙️ Built with](#built-with)
  - [📕 What I learned](#what-i-learned)
  - [⏭️ Continued development](#continued-development)
  - [📚 Useful resources](#useful-resources)
  <!-- - [🤷🏽 Author](#author) -->

## Overview

### The challenge

Users should be able to:

- View the timer with a play and pause button
- Click on play/pause button to start/pause the timer
- View the animated circle around the timer indicating the progress of the timer
- Click on the timer to change the duration

The goal here is to practice `classes` and `functions` in Javascript.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Repo](https://github.com)
- Live Site URL: [Demo](https://demo-live-site-url.com)

## My process

1. Project setup:
   create an index.html & index.js file
   Add html boilerplate `!`, script tag `<script>` with a source of index.js

2. App Design
   App features :

   - display a timer
   - shows animated circle around the timer

   Timer VS effect of the timer

   Pseudo code :

   - Isolate app responsibilities into two separate blocks:
     timer can emit events to some parts of our app and when that event occurs we can run some code to update border
     Benefits of this approach : code reuse, separate concerns

   Technical choices
   Implementation with JS Classes :
   Class Timer :
   use constructor function to set up even listeners on :
   --> user click(durationInput) on time DOM element
   --> user click (start button) on start button DOM element
   --> user click (pause button) on pause button DOM element
   start(): starts timer when user clicks on play button
   pause(): pause timer when user clicks on pause button
   onDurationChange: change timer duration when user clicks and change duration
   tick(): update state of timer as timer passes, called repeatedly

Timer class :
automatically set up event listener for us

```js
// DOM elements
class Timer {
  constructor(durationInput,startButton, pauseButton ){
    this.durationInput = durationInput;
    this.startButton  =startButton;
    this.pauseButton = pauseButton

  }
  start()
  pause()
  onDurationChange()

}
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)
```

Value of this:
calling a function with bind, call or apply override the value of this inside the function (not the global window object but the first argument passed to call, apply or bind )

function with arrow:

All other cases: this is equal to whatever is on left hand side of the dot `.` in the method call

### Built with

- HTML
- Vanilla JS
- CSS

### What I learned

### Continued development

### Useful resources

## ✏️ Author

Feel free to contact me at <mailto:hermann.kan@proton.com>

- Website - [my website](https://www.hkf.com)
- Github - [@hermkan](https://github.com/hermkan)
