'use strict';

module.exports = function(v) {
    if(v) throw new Error("Unexpected parameter: " + v);
    for(var i=0; i<100; i++) {
        v = Math.floor(Math.sqrt(Math.random())); // slow down code, it runs too fast
    }
    return true;
};
