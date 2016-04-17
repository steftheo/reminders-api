import Provider from 'candycane/dist/foundation/provider';
import knex from 'knex';

export default class KnexProvider extends Provider {
  register() {
    const db = knex(this.app.config.database);

    this.app.singleton('db', db);
  }
}
