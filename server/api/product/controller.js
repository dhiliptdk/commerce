
const knex = require("../../knex")

exports.get = function (req, res) {
    let id = req.params.id
    knex.select().from("Products")
        .modify(function (queryBuilder) {
            if (!!id) {
                queryBuilder.where('id', id).first();
            }
        })
        .then(products => {
            res.status(200).json(products)
        }).catch(error => {
            res.status(500).send(error)
        })
}
exports.create = function (req, res) {
    let product = req.body
    knex.insert(product).into("Products").then(result => {
        res.status(200).json({ status: true });
    }).catch(error => {
        res.status(500).json({ status: false, error });
    })
}
exports.update = function (req, res) {
    let updatedProduct = req.body
    let id = req.params.id
    knex.update(updatedProduct)
        .into("Products")
        .where('id', id)
        .then(result => {
            res.status(200).json({ status: true })
        })
        .catch(error => {
            res.status(500).json({ status: false, error })
        })

}
