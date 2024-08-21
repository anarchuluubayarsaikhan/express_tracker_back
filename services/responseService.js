const {createCategory,deleteCategory,editCategory,readCategory} = require("./categoryService")

async function responseReadCategory (req, res) {
   
        const categories = await readCategory()
        res.json(categories)
      
}

async function responseCreateCategory (req, res) {
    
        const { name } = req.body
        const id = await createCategory({ name })
        if (!name) {
          res.sendStatus(401)
        }
        res.status(201).json({ id })
      }
    

async  function responseDeleteCategory (req, res) {
    
        const { id } = req.params
        const index = await deleteCategory({ id })
        if (index < 0) {
          res.sendStatus(404)
          return
        }
        res.sendStatus(204)
      }


async  function responseEditCategory (req, res) {
    
        const { id } = req.params;
        const { name } = req.body;
        const indexof= await editCategory({ id, name })
        if (indexof < 0) {
          res.sendStatus(404)
          return
        }
        if (!name) {
          res.sendStatus(401)
          return
        }
        res.sendStatus(200)
      }

module.exports = {
    responseReadCategory,
    responseCreateCategory,
    responseDeleteCategory,
    responseEditCategory,
}