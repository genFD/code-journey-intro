# CLASSES - LIBRARY - SCHOOL CATALOGUE

## Table of contents

- [Concepts](#concepts-to-review-for-this-project)
- [Learning goal](#learning-goal--master-class-syntax-and-inheritance)
- [💻 Application Overview](#overview)

  - [🥷🏽 The challenge](#the-challenge)
    - [Build a library](#build-a-library)
    - [School catalogue](#school-catalogue)

<!-- - [🪜 My process](#my-process)

  - [📕 What I learned](#what-i-learned)
  - [⏭️ Continued development](#continued-development)
  - [📚 Useful resources](#useful-resources) -->

## Concepts to review for this project

- Array and Iterators
- Classes
- Inheritance

## Learning Goal : Master class syntax and inheritance

## Overview

### The challenge

#### Build a Library

The library carries two different types of media: books and movies.
In this project you will create a parent class named `Media` with two subclasses: Book and Movie These two subclasses have the following properties and methods:

- BOOK
  `Properties`: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
  `Getters`: all properties have a getter
  `Methods`: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

- Movie
  `Properties`: director (string), title (string), runTime (number), `isCheckedOut` (boolean, initially false), and ratings (array, initially empty)
  `Getters`: all properties have a getter
  `Methods`: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Users should be able to:

1. Create a Book instance

2. Save the instance to a constant variable .

3. Call `toggleCheckOutStatus()` on the instance.

4. Log the value saved to the isCheckedOut property.

5. Call `.addRating()` three times on the instance with inputs of 4, 5, and 5.

6. Call .getAverageRating() on the instance. Log the result to the console.

7. repeat the same process for a Movie instance

#### School Catalogue

Create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

- School
  `Properties` : name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
  `Getters` : all properties have getters
  `Setters` : the numberOfStudents property has a setter
  `Methods` : .quickFacts() and .pickSubstituteTeacher() (this is a static method)

- Primary
  Includes everything in the School class, plus one additional property
  Properties: pickupPolicy (string)

- Middle
  Does not include any additional properties or methods

- High
  Includes everything in the School class, plus one additional property
  Properties: sportsTeams (array of strings)

Addition Requirements :

- Create a setter for numberOfStudents. The method should first check if the input (newNumberOfStudents) is a number. If it is a number, then set the numberOfStudents property. If not, log, 'Invalid input: numberOfStudents must be set to a Number.'

- Under your getters, create a method named quickFacts that logs the following string to the console:

`SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level.`
In place of `SCHOOL NAME`, substitute an instance’s name value. In place of `NUMBER OF STUDENTS`, substitute an instance’s numberOfStudents value. In place of `LEVEL`, substitute an instance’s level value.

- Under `.quickFacts()`, create a static method named pickSubstituteTeacher. This method will receive one parameter, named substituteTeachers. The substituteTeachers parameter will take an array of strings.

- Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array. Use this number to access and return the substitute teacher at that randomly generated index.
