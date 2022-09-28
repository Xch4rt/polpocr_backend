const express = require("express");
const user = require("./routes/user")
const todo = require("./routes/todo")
const app = express();


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

app.use(express.json())

app.use('/api/v1', user)
app.use('/api/v1', todo)



