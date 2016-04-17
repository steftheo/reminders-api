'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _router = require('candycane/dist/http/router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AppRouter = class AppRouter extends _router2.default {
  /**
   * Here is the function that will allow you to register the routes for your application.
   * Use the `resource`, `get`, `post`, `put`, and `delete` methods to describe your API
   *
   * @return undefined
   */
  registerRoutes() {
    this.get(`/`, `version`);
  }
};
exports.default = AppRouter;