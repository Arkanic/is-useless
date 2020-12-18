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
const isUseless = require("is-useless");
```

## Usage
```js
const isUseless = require("is-useless");

console.log(isUseless(process.env.CREDIT_CARD_NUMBER)); // may or may not send to servers for product improvement
```

## Support
Arkanic#3976 on discord


## Updates

### v1.2.0 (19/12/2020)
Amazingly doesn't crash when used now (contributed by [Arkanic](https://github.com/Arkanic))

### v1.1.0 (18/12/2020)
Added amazing new features that installed more dependencies and slowed everything down without managing to achieved anything useful (contributed by [ZestyLemonade](https://github.com/sample-text-here))

### v1.0.0
Package created (contributed by [Arkanic](https://github.com/Arkanic))
