exports.seed = function (knex) {
    return knex('Carts').del()
        .then(function () {
            return knex('Carts').insert([
                { id: 1, userId: 1,netAmount:2000 }
            ]);
        });
};
