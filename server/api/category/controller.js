
const knex = require("../../knex")


exports.get = function (req, res) {
    let id = req.params.id
    knex.select().from("Categories")
        .modify(function (queryBuilder) {
            if (!!id) {
                queryBuilder.where('id', id);
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
    knex.insert(product).into("Categories").then(result => {
        res.status(200).json({ status: true });
    }).catch(error => {
        res.status(500).json({ status: false, error });
    })
}
