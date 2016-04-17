
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`reminders`, (table) => {
    table.increments(`id`);

    table.integer(`list_id`);
    table.boolean(`done`);
    table.string(`name`);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`reminders`);
};
