'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _providers = require('./providers');

var _providers2 = _interopRequireDefault(_providers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = {
  providers: _providers2.default,

  database: {
    client: 'sqlite3',
    connection: {
      filename: `${ process.cwd() }/dev.sqlite`
    }
  }
};

if (process.env.DATABASE_URL) {
  config.database.client = `postgresql`;
  config.database.connection = process.env.DATABASE_URL;
}

exports.default = config;