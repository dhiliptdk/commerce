
exports.seed = function (knex) {
  return knex('Roles').del()
    .then(function () {
      return knex('Roles').insert([
        { id: 1, name: 'User' },
        { id: 2, name: 'Merchant' },
      ]);
    });
};
