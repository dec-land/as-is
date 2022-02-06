# As-Is

## Description
As-Is contains two modules.
 * Is - Type predicates for checking values are of certain types.
 * As - Asserting values are of a certain type using the above predicates.

## Usage

Using npm:
```shell
$ npm i -g npm
$ npm i as-is
```

In Javascript:
```js
// Load the As and Is
var { As, Is } = require('@dec-land/as-is');

// Load them seperately
var As = require('@dec-land/as-is/as');
var Is = require('@dec-land/as-is/is');
```

In Typescript
```ts
// Load the As and Is
import { Is, As } from '@dec-land/as-is';

// Load them seperately
import As from '@dec-land/as-is/As';
import Is from '@dec-land/as-is/Is';
```

## Examples


In Examples
```ts
import Is from '@dec-land/as-is/Is';

Is.number(5) // true
Is.number('test'); // false

Is.arrayOf([5, 10], Is.integer) // true
Is.arrayOf(['a', 'b'], Is.integer); // false

Is.date('date') // false
Is.date(new Date()); // true

// etc...
```

As Examples
```ts
import { As, Is } from '@dec-land/as-is';

let a: unknown = 'test'; // Here we have an unknown string

// console.log(a.split(',')); Split does not exist on type unknown

As.string(a); // Assert the a as a string, if it isn't an error will be thrown.

console.log(a.split(',')); // Now works as flow wouldn't reach here unless a is a string

let b: unknown = [new Date(), new Date()]; // Here we have an unknown array of dates.

// b.map((date) => console.log(date.toLocaleString())); // Property 'map' does not exist on type 'unknown'.

As.arrayOf(b, Is.date); // Assert that b is an array of dates. If not an error will be thrown

b.map((date) => console.log(date.toLocaleString())); // Works fine

// etc...

```

## Why As-Is?

As-Is offers the following predicates that can be used to check or assert whether a value is of a specific type.

  * number
  * integer
  * string
  * boolean
  * primitive
  * nonPrimitive
  * date
  * json
  * array
  * readonlyArray
  * readonlyArrayOf
  * object
  * objectWithProperties
  * function

## Tests

Tests are included for As and Is. These can be ran using:

```shell
$ npm test
```
