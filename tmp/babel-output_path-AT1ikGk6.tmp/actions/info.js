'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _action = require('candycane/dist/http/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _default = class _default extends _action2.default {
  data() {
    return {
      x: `my data`
    };
  }
};

exports.default = _default;