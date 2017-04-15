
exports.seed = function (knex) {
  return knex('venues').del()
  .then(() => {
    return knex('venues').insert([{
      id:1,
      name: 'Roxbury' ,
      capacity: 5000,
      line_1: '1234',
      line_2: 'Main Street',
      city: 'Seattle',
      state: 'WA',
      zip: 98101,
    }, {
      id:2,
      name: 'Showare Center' ,
      capacity: 10000,
      line_1: '45676 ',
      line_2: '68th Place',
      city: 'Kent',
      state: 'WA',
      zip: 98113,
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('venues_id_seq', (SELECT MAX(id) FROM venues));"
    );
  });
};
