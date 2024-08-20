const {createCategory,deleteCategory,editCategory,readCategory} = require("./services/categoryService")

function responseReadCategory () {
    async (req, res) => {
        const categories = await readCategory()
        res.json(categories)
      }
}

function responseCreateCategory () {
    async (req, res) => {
        const { name } = req.body
        const id = await createCategory({ name })
        if (!name) {
          res.sendStatus(401)
        }
        res.status(201).json({ id })
      }
    
}

function responseDeleteCategory () {
    async (req, res) => {
        const { id } = req.params
        const index = await deleteCategory({ id })
        if (index < 0) {
          res.sendStatus(404)
          return
        }
        res.sendStatus(204)
      }
}

function responseEditCategory () {
    async (req, res) => {
        const { id } = req.params;
        const { name } = req.body;
        await editCategory({ id, name })
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
}

module.exports = {
    responseReadCategory,
    responseCreateCategory,
    responseDeleteCategory,
    responseEditCategory,
}