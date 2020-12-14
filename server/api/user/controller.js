
const knex = require("../../knex")
const auth = require("../auth")

exports.auth = function (req, res) {
    const { email, password } = req.body
    knex.select("id", "email", "password")
        .where("email", email)
        .from("Users")
        .first()
        .then(user => {
            console.log(user, password)
            if (password == user.password) {
                var token = auth.signToken(user.id, "7 days");
                res.json({ token: token, role: user.role });
            }
            else {
                res.status(401).json({ message: 'Password Incorrect' })
            }
        })
        .catch(err => {
            res.status(401).json({ message: 'E-mail not found' })
        })
}
exports.create = function (req, res) {
    let user = req.body
    knex.insert(user).into("Users").then(result => {
        res.status(200).json({ status: true });
    }).catch(error => {
        res.status(500).json({ status: false, error });
    })
}
exports.me = function (req, res) {
    console.log(req.user)
    knex.select('name', 'roleId', 'phone', 'email')
        .from('Users')
        .where("id", req.user.id)
        .first()
        .then((user) => {
            res.status(200).json(user);
        }).catch(error => {
            res.status(500).json({ status: false, error });
        })
}
