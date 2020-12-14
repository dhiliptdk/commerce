exports.seed = function (knex) {
    return knex('CartProducts').del()
        .then(function () {
            return knex('CartProducts').insert([
                { id: 1, cartId: 1, productId: 1, quantity: 1, netAmount: 100 },
                { id: 2, cartId: 1, productId: 2, quantity: 2, netAmount:60},
                { id: 3, cartId: 1, productId: 3, quantity: 1, netAmount:20 }
            ]);
        });
};
