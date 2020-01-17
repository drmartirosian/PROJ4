const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get("/index", usersCtrl.index);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
// put checkAuth, inside links to protect
router.use(require('../../config/auth'));
router.post("/create", checkAuth, usersCtrl.create);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;