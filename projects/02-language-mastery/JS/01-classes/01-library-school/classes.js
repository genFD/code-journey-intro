// # MY SOLUTION

//###################### LIBRARY ######################//
class Media {
  constructor(title) {
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  get title() {
    return this._title
  }
  get isCheckedOut() {
    return this._isCheckedOut
  }
  get ratings() {
    return this._ratings
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut
  }

  getAverageRating() {
    const averageRating =
      this._ratings.reduce((acc, curr) => {
        return acc + curr
      }, 0) / this._ratings.length
    return averageRating
  }
  addRating(rating) {
    this._ratings.push(rating)
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title)
    this._author = author
    this._pages = pages
  }
  get author() {
    return this._author
  }
  get pages() {
    return this._pages
  }
}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }
  get director() {
    return this._director
  }
  get runTime() {
    return this._runTime
  }
}

const historyOfEverything = new Book(
  'A Short History of Nearly Everything',
  'Bill Bryson',
  544
)

historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
speed.getAverageRating()

//###################### SCHOOL ######################//

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name
    this._level = level
    this.numberOfStudents = numberOfStudents
  }
  get name() {
    return this._name
  }
  get level() {
    return this.level
  }
  get numberOfStudents() {
    return this.numberOfStudents
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    )
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const randomNumber = Math.floor(substituteTeachers.length * Math.random())
    return substituteTeachers[randomNumber]
  }
  set numberOfStudents(input) {
    if (typeof input != 'number') {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
    this._numberOfStudents = input
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents)
    this._pickupPolicy = pickupPolicy
  }

  get pickupPolicy() {
    return this._pickupPolicy
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'middle', numberOfStudents)
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    console.log(this._sportsTeams)
  }
}

class Middle {}

const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
)
lorraineHansbury.quickFacts()

School.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli',
])

const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field',
])
alSmith.sportsTeams
