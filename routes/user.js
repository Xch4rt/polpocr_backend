const express = require("express");
const router = express.Router();
const {getUser, getUserId, createUser} = require('../controller/users.controller')


router.get("/users", getUser)

router.get("/users/:id", getUserId)

router.post("/users", createUser)

router.get("/users/:id/todos", )

module.exports = router;