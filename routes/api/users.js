const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

router.get("/users", usersCtrl.index);
router.post("/users", usersCtrl.create);

module.exports = router;