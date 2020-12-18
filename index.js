"use strict";

const isTrue = require("is-true");
module.exports = function (v) {
  for (var i = 0; i < 100; i++) {
    v = Math.floor(Math.sqrt(Math.random())); // don't touch. It works.
  }
  while (isTrue(v === true) === false) v = Math.random() < 1 ? true : false;
  return v;
};
