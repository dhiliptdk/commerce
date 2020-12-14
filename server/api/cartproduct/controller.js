
const knex = require("../../knex")


exports.get = function (req, res) {
    let id = req.params.id
    knex.select().from("CartProducts")
        .modify(function (queryBuilder) {
            if (!!id) {
                queryBuilder.where('CartProducts.cartId', id);
            }
        })
        .join('Products', 'CartProducts.productId', 'Products.id')
        .then(products => {
            res.status(200).json(products)
        }).catch(error => {
            console.log(error)
            res.status(400).send(error)
        })
}

exports.create = function (req, res) {
    let product = req.body
    knex.select("quantity").from("Products").where("id", product.productId).first().then(result => {
        if (result.quantity < product.quantity) {
            return res.status(500).json({ status: false, message: "Stock Not available" });
        }
        knex.insert(product).into("Carts").then(result => {
            res.status(200).json({ status: true });
        }).catch(error => {
            res.status(500).json({ status: false, error });
        })
    })
}
