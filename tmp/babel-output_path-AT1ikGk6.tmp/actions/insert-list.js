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
    const title = this.request.body.title;
    const knex = this.app.make(`db`);

    return knex(`lists`).insert({ title: title }).then(ids => {
      return {
        message: `Create successful`,
        ids: ids
      };
    });
  }
};

exports.default = _default;