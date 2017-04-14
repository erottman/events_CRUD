'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('attendees_tickets', (table) => {
    table.increments().notNullable();
    table.integer('ticket_id').notNullable();
    table.integer('attendee_id').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendees_tickets');
};
