const express = require("express");
const user = require("./routes/user")

const app = express();


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

app.use('/api/v1', user)


