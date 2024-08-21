const { v4: uuidv4 } = require('uuid')

const fs = require('fs')
const { isDate } = require('util/types')

const content = fs.readFileSync('data/categories.json', "utf8")
let categories = JSON.parse(content)

function readCategory() {
    const content = fs.readFileSync('data/categories.json', "utf8")
    const categories = JSON.parse(content)
    return categories;
}

function createCategory({ name }) {
    const id = uuidv4()
    categories.push({ name, id })
    fs.writeFileSync('data/categories.json', JSON.stringify(categories))
    return id;
}

function deleteCategory({ id }) {
    const index = categories.findIndex((cat) => cat.id === id)
    categories = categories.filter((cat) => cat.id !== id)
    fs.writeFileSync('data/categories.json', JSON.stringify(categories))
    return index;
}

function editCategory({ id, name}) {
    const indexof = categories.findIndex((cat) => cat.id === id)
    categories[indexof].name = name
    fs.writeFileSync('data/categories.json', JSON.stringify(categories))
    return indexof;
}

module.exports = {
    createCategory,
    deleteCategory,
    editCategory,
    readCategory,
}