exports.seed = function (knex) {
  return knex('tickets').del()
  .then(() => {
    return knex('tickets').insert([{
      id:1,
      events_id: 1,
      name: 'Guns and Roses Not in This Lifetime Tour',
      price: '$85.00',
    }, {
      id:2,
      events_id: 2,
      name: 'Disney on Ice Presents Frozen',
      price: '$85.00',
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('tickets_id_seq', (SELECT MAX(id) FROM tickets));"
    );
  });
};
