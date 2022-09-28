const express = require("express");
const router = express.Router();
const {getTodo, createTask} = require('../controller/todo.controller')

router.get("/todos/:id", getTodo)

router.post("/todos/:id/task", createTask)


module.exports = router;