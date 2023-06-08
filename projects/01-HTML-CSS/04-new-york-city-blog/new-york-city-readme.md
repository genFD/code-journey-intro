# NEW YORK CITY BLOG

## Table of contents

- [Concepts](#concepts-to-review-for-this-project)
- [Learning goal](#learning-goal)
- [💻 Application Overview](#overview)
  - [📸Screenshot](#screenshot)
  - [🥷🏽 The challenge](#the-challenge)
  - [🔗Links](#links)
- [🪜 My process](#my-process)
- [📕 What I learned](#what-i-learned)
- [⏭️ Continued development](#continued-development)
- [📚 Useful resources](#useful-resources)

## Concepts to review for this project

## Learning Goal

- Apply your knowledge of semantic HTML to write a blog

## Overview

### Screenshot

![Design preview for OMNIFOOD](/projects/01-HTML-CSS/02-wine-festival-schedule/wine-schedule.png)

### The challenge

The challenge is to build out this page and get it looking as close to the design as possible.
Some styling was added to the page in `style.css`

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Rationale

#### Navigation Bar

- A common usage of a navigation bar is to create shortcuts for a webpage. This will allow the user to go directly to the information they want to access through the navigation links. So I created a `<nav>` element underneath the opening `<body>` tag.

- Within the `<nav>` element, I created a`<ul>` element to create an unordered list. The unordered list should contain : Blog, Media, About

- Then I used an `<li>` element with `<a href="#"></a>` nested within the `<li>` element to link the content to the nav bar

#### Blog Content

- We need to title the blog, so people know what we’re writing about. So I Created a `<header>` element under the closing `</nav>` tag, which contain the text `New York City`

- the dominant content within a webpage goes into the `<main/>` tag, so I created a `<main>` element below the closing `</header>` tag.

- Within the `<main>` element, I will add two sections : `Blog` and `Media`. Between these sections the illustration and the supporting text. I created the first `<section>` element with an id of “blog”. This ` element will hold the main content of the webpage. I am giving this element an id so that I can target it with the nav bar.

- The `<article>` element holds content that makes sense on its own. So I created an `<article>` element within the `<section>` element. Then, created a `<p>` element within `<article>` that has the text: `New York City is made up of five boroughs which include Queens, Manhattan, Brooklyn, the Bronx ...`

- the next step is adding media. `<figure>` is an element used to encapsulate media such as an image, illustration, diagram, code snippet. So I added the `<figure>` element under the closing `<section>` tag . This helps screen readers and browsers to interpret the code better.

- I created an `<img>` tag within `<figure>` for the image (statue of liberty). As always I've added the `alt` attribute so that if the image fails to load on a web page, a user can mouse over the area and read a brief description of the image.

- I also added `figcaption` to describe and bring meaning to the image.

#### Aside Content

- We also needed to add additional content to enhance the post. The `<aside>` element is used to mark additional information that can enhance another element. So I used the `<aside>` element under the closing `</figure>` tag to add the supporting text.

- Next, the webpage has a list some of the top food options in NYC, ranked from 1 to 7. the `<ol>` element is useful when you need to list different steps in a process or rank items from first to last. So I used the `<ol>` element to create this ordered list!

#### More Media

- I created a section for the media content with an id of “media” to target it with the nav bar.

- Within the new `<section>` element, I created an `<article>`element. I added an `<h2>` element within `<article>` to identify the section.

- Then the description to explain the media in a `<p>` element.

- The `<video>` element is used to display a video to the user. so I created a `<video>` element with the attribute `controls` under the closing </article> tag. Controls is used here to show the play/pause button along with volume control and a fullscreen option.

- The `<audio>` element is used to embed audio content into a document. So I created a `<audio>` element with the attribute controls.

#### Footer

- I created a `<footer>` element with an id of “about” under the closing </main> tag

- The content at the bottom goes in the footer. So I added :
  - A `<p>` tag for my name.
  - Another one to provide my contact information.

And that's it! a webpage using only `semantic elements`.🎉 🎉 🎉 🎉

### Built with

- Semantic HTML5 markup
- CSS custom properties

#### What I learned

#### Continued development

#### Useful resources
