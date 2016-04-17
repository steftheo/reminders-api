'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _class;

var _action = require('candycane/dist/http/action');

var _action2 = _interopRequireDefault(_action);

var _candycaneJsonapiMapper = require('candycane-jsonapi-mapper');

var _candycaneJsonapiMapper2 = _interopRequireDefault(_candycaneJsonapiMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let _default = (_dec = (0, _candycaneJsonapiMapper2.default)(`reminder`), _dec(_class = class _default extends _action2.default {
  data() {
    const bookshelf = this.app.make(`store`);
    const Reminder = bookshelf.model(`reminder`);
    const name = this.request.body.data.attributes.name;
    const done = this.request.body.data.attributes.done;
    const list_id = this.request.body.data.relationships.list.data.id;

    const reminder = new Reminder({ name: name, done: done, list_id: list_id });
    return reminder.save();
  }
}) || _class);

exports.default = _default;