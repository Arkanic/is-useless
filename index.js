'use strict';

module.exports = function(v) {
    if(v) throw new Error("Unexpected parameter: " + v);
    return true;
};
