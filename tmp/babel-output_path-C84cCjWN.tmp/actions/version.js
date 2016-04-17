'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _action = require('candycane/dist/http/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let Version = class Version extends _action2.default {
  /**
   * This function can return a promise (or raw POJOs) of data to be looked up
   *
   * @return Object/Promise
   */
  data() {
    return {
      version: `1.0.0`
    };
  }
};
exports.default = Version;