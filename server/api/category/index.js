var express = require('express');
const controller = require("./controller")
var router = express.Router();
const { isAuthenticated } = require('../auth');


router.get('/:id',isAuthenticated(), controller.get);
router.get('/',isAuthenticated(), controller.get);

module.exports = router;