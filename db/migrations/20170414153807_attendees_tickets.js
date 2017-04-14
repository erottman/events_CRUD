'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('attendees_tickets', (table) => {
    table.increments().notNullable();
    table.string('preferred_name').notNullable();
    table.string('last_name').notNullable();
    table.string('birthday').notNullable();
    table.string('email').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendees_tickets');
};
