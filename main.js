const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/articles", (req, res) => {
    res.json([
        { id: 1, title: "Hello" },
        { id: 2, title: "World" }])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})