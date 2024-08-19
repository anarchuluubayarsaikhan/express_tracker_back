const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const {v4: uuidv4} = require("uuid");

app.use(cors())
app.use(express.json())
const fs = require('fs')
const { isDate } = require('util/types')

const content = fs.readFileSync ('categories.json', "utf8")
let categories = JSON.parse(content)

app.get('/categories/list', (req, res) => {
    res.json(categories)
})

app.get('/categories', (req, res) => {
    const {name} =req.query
    categories.push ({name:name, id:new Date().toISOString()},

    )
    fs.writeFileSync ('categories.json', JSON.stringify (categories))
  res.send("Success")
})

app.delete('/categories/:id', (req, res) => {
    const {id} =req.params
    categories = categories.filter((cat)=> cat.id !== id)
    fs.writeFileSync ('categories.json', JSON.stringify (categories))
    res.send("Delete")
})

app.put('/categories/:id', (req, res) => {
    const {id} =req.params;
    const {name} = req.body;
    const indexof = categories.findIndex((cat)=>cat.id === id)
    categories[indexof].name = name
    fs.writeFileSync ('categories.json', JSON.stringify (categories))
    res.json("Edit")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
