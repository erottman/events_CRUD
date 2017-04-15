
exports.seed = function (knex) {
  return knex('venues').del()
  .then(() => {
    return knex('venues').insert([{
      id:1,
      name: 'Roxbury' ,
      capacity: 100,
      line_1: '1234',
      line_2: 'Main Street',
      city: 'Seattle',
      zip: 98101,
    }, {
      id:1,
      name: 'Roxbury' ,
      capacity: 100,
      line_1: '1234',
      line_2: 'Main Street',
      city: 'Seattle',
      zip: 98101,
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('venues_id_seq', (SELECT MAX(id) FROM venues));"
    );
  });
};
