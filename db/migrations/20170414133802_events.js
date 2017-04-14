'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments().notNullable();
    table.integer('venue_id').notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('phone_number').notNullable();
    table.boolean('over_21').notNullable().default(false);
    table.dateTime('start_datetime').notNullable();
    table.dateTime('end_datetime').notNullable();
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};
