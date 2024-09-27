"use strict";

const EMPTY_STRING = require("empty-string");
const colors = require("colors/safe");
const _log = require("logtoconsole").log;
const { functions, _return } = require("returndotjs/safe");

let Logger = class {
  constructor (shouldLoggingEnabled) {
    this.is = shouldLoggingEnabled;
  }

  log(message) {
    if (this.is) _log(message);
  }
};

functions.isuseless = function(v, shouldLoggingEnabled) {
  const logger = new Logger(shouldLoggingEnabled);

  logger.log(colors.cyan('[isuseless] Isuselessing'));

  let result = "uncomputed";
  if(v != null) result = v;
  else result = EMPTY_STRING;

  logger.log(colors.green('[isuseless] Isuselessed'));

  _return(result);
};

exports.isuseless = functions.isuseless;
