const e = require('./index').isuseless

console.log(e("hi", false, false, "console.log('XSS')"))