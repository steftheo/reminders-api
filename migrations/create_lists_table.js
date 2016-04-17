
exports.up = function(knex, Promise) {
  return knex.schema.createTable(`lists`, (table) => {
    table.increments(`id`);

    table.string(`title`);
  });
};

exports.down = function(knex, Promise) {
  knex.dropTable(`lists`);
};
