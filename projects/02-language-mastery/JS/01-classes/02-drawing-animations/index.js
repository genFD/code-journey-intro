// save data + functionnality with class : technical choice reason
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput
    this.startButton = startButton
    this.pauseButton = pauseButton

    this.startButton.addEventListener('click', this.start)
    this.pauseButton.addEventListener('click', this.pause)
  }
  start = () => {
    this.tick()
    this.intervalId = setInterval(this.tick, 1000) //returns an timer id that we could use to clear interval
  }

  pause = () => {
    clearInterval(this.intervalId)
  }
  tick = () => {
    console.log('tick')
  }
}

const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)
// this.start
timer.start()

// anytime we want to refer to the newly created object from invoking new Timer we use this key word

// if we don't add new this is going to points to the global object
// this points to the object returned from calling new timer
// we add properties to this new object by using `this.durationInput`, or `this.startButton`
// {
//  durationInput: durationInput,
//  startButton : startButton,
//  startButton: pauseButton
// }

// the returned object has automatically a ref to the prototype prop of the constructor function. the prototype prop is an object that contains the methods : start, pause, tick

// Timer.prototype.start = function (){
//  this.tick()
//  this.intervalId = setInterval(this.tick, 1000)
// }

// Timer.prototype = {
//  start : function() {
//  this.tick()
//  this.intervalId = setInterval(this.tick, 1000)
//  }
// }

// With arrow function `this` is going to referred to whatever `this` was when the function was defined.
// arrow function bind this lexically,(where the fn was saved)  determined something about this when I get called

// Side effects : when we go look for something or change something outside of the current execution context
// window object called in a function
// async code
