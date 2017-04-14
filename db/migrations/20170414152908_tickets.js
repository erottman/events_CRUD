'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('tickets', (table) => {
    table.increments().notNullable();
    table.integer('events_id').notNullable();
    table.string('name').notNullable();
    table.string('price').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tickets');
};
