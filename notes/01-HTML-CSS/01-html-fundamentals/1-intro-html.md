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

- Learning how to add and modify basic content on a page, like text, images, and videos.

## Notes

### What is HTML?

- Stands for HyperText Markup Language

- HTML is a markup language that web developers use to `structure and describe the content of a webpage` (not a programming language)

- HTML consists of elements that described different types of content:
  paragraphs, links, headings, images, video, etc.

- Web browsers understand HTML and render HTML code as websites

### Anatomy of an HTML element

![Anatomy html element](/notes/01-HTML-CSS/assets/anatomy-html.svg)

```html
<p>HTML is a markup language.</p>
```

an element is made of 3 parts :

1. The opening tag : Name of the element wrapped in `<>`
2. The content : In the example above, it's a text but it might be another element a `child element`. Some elements have no contents like `<img/>`
3. The Closing tag : Same as the opening tag but with a forward slash `/`

There are many tags that we can use to organize and display text and other types of content, like image

### HTML document structure

HTML is organized as a collection of family tree relationships

```html
<body>
  <p>This paragraph is a child of the body</p>
</body>
```

We placed `<p>` tags within `<body>` tags.

- The child element is said to be nested inside of the parent element.

- The relationship between elements and their ancestor and descendent elements is known as hierarchy.
- The reason why understanding the hierarchy is important is `because child elements can inherit behavior and styling from their parent element`.

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

### Headings

Headings are used to describe content, like the title of a movie or an educational article.

- There are 6 different headings : h1, h2, h3, h4, h5, h6. Headings helps to create a `visual hierarchy` and break up text into logical parts.

- Each page should have only one `h1`

### DIVS

`<div>` is short for “division” or a container that divides the page into sections. These sections are very useful for grouping elements in your HTML together.

```html
<body>
  <div>
    <h1>Why use divs?</h1>
    <p>Great for grouping elements!</p>
  </div>
</body>
```

divs are very useful when we want to apply custom styles to our HTML elements.

`<div>`s can contain any text or other HTML elements, such as links, images, or videos.

### Attributes

Attributes are `content added to the opening tag of an element and can be used in several different ways, from providing information to changing styling`.
Attributes are made up of the following two parts:

- The name of the attribute
- The value of the attribute

One commonly used attribute is the `id`. `ids` have several different purposes in HTML, but for now, we’ll focus on how they can help us identify content on our page.

```html
<div id="intro">
  <h1>Introduction</h1>
</div>
```

#### Displaying Text

- `<p>`, `<span>` and `<div>` tags specify text or blocks.

- The `<em>` and `<strong>` tags are used to emphasize text.

- Line breaks are created with the `<br>` tag

- Ordered lists `<ol>` are numbered and unordered lists `<ul>` are bulleted

- Images `<img>` and videos `<video>` can be added by linking to an existing source.
