
const knex = require("../../knex")


exports.get = function (req, res) {
    let id = req.params.id
    knex.select().from("Carts")
        .modify(function (queryBuilder) {
            if (!!id) {
                queryBuilder.where('id', id);
            }
        })
        // .join('CartProducts', 'Carts.id', 'CartProducts.cartId')
        .then(products => {
            res.status(200).json(products)
        }).catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
}

exports.create = function (req, res) {
    let product = req.body
    knex.insert(product).into("Carts").then(result => {
        res.status(200).json({ status: true });
    }).catch(error => {
        res.status(500).json({ status: false, error });
    })
}
