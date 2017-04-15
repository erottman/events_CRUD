exports.seed = function (knex) {
  return knex('events').del()
  .then(() => {
    return knex('events').insert([{
      id:1,
      venue_id:1,
      title: 'Guns and Roses' ,
      description: 'Not in This Lifetime Tour',
      over_21: true,
      start_datetime: '2017-09-01 18:30 UTC',
      end_datetime: '2017-09-02 23:00 UTC',
    }, {
      id:2,
      venue_id:2,
      title: 'Disney on Ice' ,
      description: 'Frozen',
      over_21: false,
      start_datetime: '2017-07-01 17:30 UTC',
      end_datetime: '2017-07-02  23:30 UTC',
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('events_id_seq', (SELECT MAX(id) FROM events));"
    );
  });
};
