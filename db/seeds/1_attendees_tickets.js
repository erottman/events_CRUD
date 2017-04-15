exports.seed = function (knex) {
  return knex('attendees_tickets').del()
  .then(() => {
    return knex('attendees_tickets').insert([{
      id:1,
      ticket_id: 'E-Rock' ,
      attendee_id: 'Rottman',
      birthday: 1989-12-01,
      email: 'erock@aol.com',
    }, {
      id:2,
      preferred_name: 'J-Train' ,
      last_name: 'Rottman',
      birthday: 2000-11-01,
      email: 'jtrain@aol.com',
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('attendees_tickets_id_seq', (SELECT MAX(id) FROM attendees_tickets));"
    );
  });
};
