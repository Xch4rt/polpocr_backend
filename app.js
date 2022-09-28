const express = require("express");


var app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

app.get("GET/users", (req,res) =>
{
    res.json(["Pablo","Gutierrez"])
})

app.get("GET/usres/:id", (req,res) =>{})

app.get("POST/users", (req,res) => {})

app.get("GET/users/:id/todos", (req, res) => {})

app.get("GET/todos/:id", (req,res) => {})

app.get("POST/todos/:id/task", (req,res) => {})