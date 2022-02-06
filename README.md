# As-Is

## Description
As-Is contains two modules.
 * As - Type predicates for checking values are of certain types.
 * Is - Asserting values are of a certain type using the above predicates.

## Usage

Using npm:
```shell
$ npm i -g npm
$ npm i as-is
```

In Javascript:
```js
// Load the As and Is
var { As, Is } = require('as-is');

// Load them seperately
var As = require('as-is/as');
var Is = require('as-is/is');
```

In Typescript
```ts
// Load the As and Is
import { Is, As } from 'as-is';

// Load them seperately
import As from 'as-is/As';
import Is from 'as-is/Is';
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
