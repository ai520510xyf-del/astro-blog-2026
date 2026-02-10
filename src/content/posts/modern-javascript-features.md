---
title: 'Modern JavaScript Features You Should Know'
description: 'Explore the latest JavaScript features that will make your code cleaner and more efficient.'
pubDate: 2024-02-01
tags: ['JavaScript', 'Programming', 'ES6+']
author: 'Your Name'
draft: false
---

JavaScript has evolved significantly over the years. Let's explore modern features that improve developer experience and code quality.

## Optional Chaining

Safely access nested properties:

```javascript
// Before
const city = user && user.address && user.address.city;

// Now
const city = user?.address?.city;
```

## Nullish Coalescing

Provide fallback values for null/undefined:

```javascript
const count = input ?? 0; // Only falls back if input is null/undefined
```

Note: This differs from `||` which falls back for any falsy value.

## Destructuring

Extract values from objects and arrays elegantly:

```javascript
// Object destructuring
const { name, age, email } = user;

// Array destructuring
const [first, second, ...rest] = array;

// Renaming
const { name: fullName } = user;
```

## Template Literals

Build strings with embedded expressions:

```javascript
const greeting = `Hello, ${name}!`;
const multiline = `
  This is a
  multiline string
`;
```

## Async/Await

Clean asynchronous code:

```javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Array Methods

Powerful array transformations:

```javascript
// Map - transform each element
const doubled = numbers.map(n => n * 2);

// Filter - keep matching elements
const evens = numbers.filter(n => n % 2 === 0);

// Reduce - build single value
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Find - locate first match
const found = numbers.find(n => n > 5);
```

## Modules

Organize code with ES modules:

```javascript
// Export
export const PI = 3.14159;
export default function calculate() {}

// Import
import { PI } from './math.js';
import calculate from './calculate.js';
```

## Conclusion

Modern JavaScript provides powerful tools for writing clean, efficient code. Stay updated with the latest features to improve your development experience!

These features are widely supported in modern browsers and Node.js, so you can start using them today.
