'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('venues', (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.integer('capacity').notNullable();
    table.string('line_1').notNullable();
    table.string('line_2').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('venues');
};
