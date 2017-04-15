exports.seed = function (knex) {
  return knex('attendees_tickets').del()
  .then(() => {
    return knex('attendees_tickets').insert([{
      id:1,
      ticket_id: 1,
      attendee_id: 1,
    }, {
      id:2,
      ticket_id: 2,
      attendee_id: 2,

  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('attendees_tickets_id_seq', (SELECT MAX(id) FROM attendees_tickets));"
    );
  });
};
