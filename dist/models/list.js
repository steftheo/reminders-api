"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  tableName: `lists`,

  reminders: function reminders() {
    return this.hasMany(`reminder`);
  }
};
exports.default = {
  tableName: `reminders`,

  list: function list() {
    return this.belongsTo(`list`);
  }
};