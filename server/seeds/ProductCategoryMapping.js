exports.seed = function (knex) {
    return knex('ProductCategoryMapping').del()
        .then(function () {
            return knex('ProductCategoryMapping').insert([
                { id: 1, categoryId: 1, productId: 1 },
                { id: 2, categoryId: 2, productId: 2 },
                { id: 3, categoryId: 2, productId: 3 },
            ]);
        });
};
