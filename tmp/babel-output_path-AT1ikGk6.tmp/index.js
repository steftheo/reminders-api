'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Import local router and application
 */
/**
 * Import express dependencies
 */


const expressApp = (0, _express2.default)();

_app2.default.singleton(`express`, expressApp);

expressApp.use((0, _morgan2.default)(`dev`));
expressApp.use(_bodyParser2.default.json());
expressApp.use(_bodyParser2.default.json({ type: 'application/*+json' }));
expressApp.use(_bodyParser2.default.urlencoded({ extended: true }));
expressApp.use((0, _cors2.default)());

const router = new _router2.default(_app2.default);

router.registerRoutes();

exports.default = expressApp;