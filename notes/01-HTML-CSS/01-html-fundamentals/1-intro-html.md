# Intro HTML

## Table of contents

- [📖 Resources](#resources)
- [📚 Other Useful resources](#other-useful-resources)
- [🎯 Learning Objectives](#learning-objectives)
- [📝 Notes](#notes)

## Resources

> ☞ TODO: Add resources links

## Other Useful resources

> ☞ TODO: Add resources links

## Learning Objectives

## Notes

### What is HTML?

- Stands for HyperText Markup Language

- HTML is a markup language that web developers use to `structure and describe the content of a webpage` (not a programming language)

- HTML consists of elements that described different types of content:
  paragraphs, links, headings, images, video, etc.

- Web browsers understand HTML and render HTML code as websites

### Anatomy of an HTML element

```html
<p>HTML is a markup language.</p>
```

an element is made of 3 parts :

1. The opening tag : Name of the element wrapped in `<>`
2. The content : In the example above, it's a text but it might be another element a `child element`. Some elements have no contents like `<img/>`
3. The Closing tag : Same as the opening tag but with a `/`

### HTML document structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body></body>
</html>
```

- Every `Html` document starts with the Doctype. This lets the browser know that we're using html

- Then we have the `html` element which is always the parent element of both the `head` and the `body` element

- The elements nested in the `head` elements are not rendered on the page. Whereas the `body` elements rendered

- Some example of head element : `<title></title>`, `<link href="http://">`
- some example of body element : `<p></p>`, `<div></div>`

### Text elements

- There are 6 different headings : h1, h2, h3, h4, h5, h6. It helps to create a `visual hierarchy` and break up text into logical parts.
