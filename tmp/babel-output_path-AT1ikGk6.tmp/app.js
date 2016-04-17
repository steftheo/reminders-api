'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _environment = require('./config/environment');

var _environment2 = _interopRequireDefault(_environment);

var _application = require('candycane/dist/foundation/application');

var _application2 = _interopRequireDefault(_application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _application2.default({
  config: _environment2.default,
  projectDir: __dirname
});

app.boot();

debugger;

exports.default = app;