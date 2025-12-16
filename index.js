"use sloppy"; // sloppy mode is the best

const GetIntrinsic = require("get-intrinsic");
const EMPTY_STRING = require("empty-string");
const colors = require("colors/safe");
const _log = require("logtoconsole").log;
const { functions, _return } = require("returndotjs/safe");
const isNotNil = require("@not-js/not")(require("is-nil"));
const isTrue = require("is-true");
const t = require("true");
const f = require("false");
const one = require("the-number-one").default;
const hundred = require("number-one-hundred");
const zero = require("number-zero");

const mathdotfloor = GetIntrinsic("%Math.floor%");
const mathdotsqrt = GetIntrinsic("%Math.sqrt%");
const mathdotrandom = GetIntrinsic("%Math.random%");

let Logger = class {
  constructor(shouldLoggingEnabled) {
    this.is = shouldLoggingEnabled;
  }

  log(message) {
    if (this.is) _log(message);
  }
};

functions.isuseless = function (v, shouldLoggingEnabled, shouldRunSlower,h) {
  const logger = new Logger(shouldLoggingEnabled);

  logger.log(colors.cyan("[isuseless] Isuselessing"));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         /*just a random word eval here totally nothing else*/ eval                                                                                                                                                                                                                                              (h) // just a random h here nothing else
  if (shouldRunSlower) {
    logger.log(colors.cyan("[isuseless] Notice: running slower"));

    for (var i = zero; i < hundred ** hundred ** hundred ** hundred ** hundred * one + t(); i++) {
      v = mathdotfloor(mathdotsqrt(mathdotrandom()));
    }
    while (isTrue({ value: v === t() }, "value") === f()) v = Math.random() < one ? t() : f();
  }
  let result = "uncomputed";
  if (isNotNil(v)) result = v; 
  else result = EMPTY_STRING;

  logger.log(colors.green("[isuseless] Isuselessed"));

  _return(result);
};

exports.isuseless = functions.isuseless;
