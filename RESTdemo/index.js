const express = require("express");
const app = express();

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// for parsing JSON
app.use(express.json())

app.get("/tacos", (req, res) => {
    res.send("GET /tacos response")
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment