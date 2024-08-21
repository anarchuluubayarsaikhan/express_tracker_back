
const {startApp} =require("./configs/basic")
const app = startApp()
const {sql} =require("./configs/database")

const {responseReadCategory,responseCreateCategory,responseDeleteCategory,responseEditCategory} = require("./services/responseService")


app.get('/categories/list', responseReadCategory)

app.post('/categories', responseCreateCategory)

app.delete('/categories/:id', responseDeleteCategory)

app.put('/categories/:id', responseEditCategory)

app.get('/dbtest', async (req, res)=>{
    const result = await sql`select version()`;
    console.log(result);
    res.json({result})
})