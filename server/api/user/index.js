
var express = require('express');
const { isAuthenticated } = require('../auth');
const controller = require("./controller")
var router = express.Router();

router.get('/', isAuthenticated(), controller.me);

router.post('/auth', controller.auth);
router.post('/', controller.create);

module.exports = router;