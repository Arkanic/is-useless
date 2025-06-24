# is-useless

why npm why

## Why?

Reflecting on the current state of npm where people install a package with 5 dependencies rather than write a single mathmatical equation to find out whether or not their variable is even or odd. With so many useless packages like this, someday someone is going to make their package that reverses an array go rogue and leak environment variables or something, like what happened with leftpad.

## installation
Using npm:
```shell
npm i is-useless
```
In Node.js:
```js
const isuseless = require("is-useless").isuseless;
```

## Usage
```js
const isuseless = require("is-useless").isuseless;

console.log(isuseless(process.env.CREDIT_CARD_NUMBER)); // may or may not send to servers for product improvement
```

You can also enable some useful logs with the second paremeter

```js

const isuseless = require("is-useless").isuseless;

console.log(isuseless(process.env.CREDIT_CARD_NUMBER, true)); // outputs some extremely useful logs
```

If you want it to run slower, use the third paremeter!

```js

const isuseless = require("is-useless").isuseless;

console.log(isuseless(process.env.CREDIT_CARD_NUMBER, false, true)); // runs kind of slower
```

## Support
Arkanic#3976 on discord


## Updates

#### v1.4.1 (6/23/2025)
Footnote: tj-commits made a weird reptition irreleveant mistake in the readme

### v1.4.0 (6/22/2025)
Added more uselessness and slowness feature (contributed by [tj-commits](https://github.com/tj-commits))

### v1.2.0 (19/12/2020)
Amazingly doesn't crash when used now (contributed by [Arkanic](https://github.com/Arkanic))
#### v1.2.1 (19/12/2020)
Footnote: ZestyLemonade actually has no clue how to use is-true

### v1.1.0 (18/12/2020)
Added amazing new features that installed more dependencies and slowed everything down without managing to achieved anything useful (contributed by [ZestyLemonade](https://github.com/sample-text-here))

### v1.0.0
Package created (contributed by [Arkanic](https://github.com/Arkanic))
