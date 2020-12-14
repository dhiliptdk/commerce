exports.seed = function (knex) {
    return knex('Users').del()
        .then(function () {
            return knex('Users').insert([
                { id: 1, name: 'Dhilip', email: "dhilip@gmail.com", password: "123123", roleId: 1, phone: "9710932958" },
                { id: 2, name: 'kumar', email: "kumar@gmail.com", password: "123123", roleId: 1, phone: "466333566" },
                { id: 3, name: 'Dhilip', email: "dhilip1@gmail.com", password: "123123", roleId: 1, phone: "465126665" },
                { id: 4, name: 'Dhilip', email: "dhilip3@gmail.com", password: "123123", roleId: 1, phone: "5656565656" },
            ]);
        });
};
