exports.seed = function (knex) {
    return knex('Products').del()
        .then(function () {
            return knex('Products').insert([
                { id: 1, name: "Rice", price: 100, quantity: 100 },
                { id: 2, name: "Brush", price: 30, quantity: 100 },
                { id: 3, name: "paste", price: 20, quantity: 200 },
            ]);
        });
};
