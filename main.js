const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000
const fs = require('fs')
const content = fs.readFileSync('categories.js', "utf-8")
const categories = JSON.parse(content)


app.use(cors())

app.get('/categories/list', (req, res) => {
    res.send(categories)
})

app.get("/categories", (req, res) => {
    const {name} = req.query
    categories.push (
        {name: name,
         edit: "Edit",
         delete: "Delete"
        })
    fs.writeFileSync('categories.js', JSON.stringify (categories))
    res.json(["Happiness"])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})