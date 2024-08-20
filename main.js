
const {startApp} =require("./configs/basic")
const app = startApp()

const {responseReadCategory,responseCreateCategory,responseDeleteCategory,responseEditCategory} = require("./services/responseService")


app.get('/categories/list', responseReadCategory({req, res}))

app.post('/categories', responseCreateCategory({req, res}))

app.delete('/categories/:id', responseDeleteCategory({req, res}))

app.put('/categories/:id', responseEditCategory({req, res}))