exports.seed = function (knex) {
    return knex('Categories').del()
        .then(function () {
            return knex('Categories').insert([
                { id: 1, name: 'Grocery' },
                { id: 2, name: 'Personal care' },
                { id: 3, name: 'Beverages' },
                { id: 4, name: 'Accessories' },
            ]);
        });
};
