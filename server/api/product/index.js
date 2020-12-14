var express = require('express');
const { hasRole,isAuthenticated } = require('../auth');
const controller = require("./controller")
var router = express.Router();


router.get('/:id',isAuthenticated(), controller.get);
router.get('/',isAuthenticated(), controller.get);
router.post('/',isAuthenticated(), controller.create)
router.patch("/:id",isAuthenticated(),hasRole("Merchant"),controller.update)

module.exports = router;