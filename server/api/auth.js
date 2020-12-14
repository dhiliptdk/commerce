var expressJwt = require('express-jwt');
const config = require('../config');
var validateJwt = expressJwt({ secret: config.secrets.session, algorithms: ['HS256'] });
var knex = require("./../knex")
var jwt = require('jsonwebtoken');
var compose = require('composable-middleware');
function isAuthenticated() {
    return compose()
        .use(function (req, res, next) {
            validateJwt(req, res, next);
        })
        .use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError') {
                if (err.message === "jwt expired") {
                    res.status(401).json({ message: 'Session expired! please login to continue.' })
                }
                if (err.message === "invalid token") {
                    res.status(401).json({ message: 'Unauthorised access. login to continue.' })
                }
            }
            next()
        })
        .use(function (req, res, next) {
            knex.select('id', 'name', 'roleId').from('Users').where("id", req.user.id).first()
                .then((user) => {
                    console.log(user)
                    if (!user) return res.status(403).send('Unauthorized');
                    req.user = user;
                    next();
                })
                .catch((err) => {
                    console.log(err)
                    if (err) return next(err);
                })
        })
};

function hasRole(roleRequired) {
    if (!roleRequired) throw new Error('Required role needs to be set');
    return compose()
        .use(isAuthenticated())
        .use(function meetsRequirements(req, res, next) {
            knex.select("id").from("Roles").where("name", roleRequired).first()
                .then(role)
            if (req.user.role >= role.id) {
                next();
            }
            else {
                res.status(403).send('Forbidden');
            }
        });
}

function signToken(id, expiresIn = "15m") {
    return jwt.sign({ id: id }, config.secrets.session, { expiresIn: expiresIn });
}
module.exports = {
    signToken,
    isAuthenticated,
    hasRole
} 