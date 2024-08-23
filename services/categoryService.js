const { v4: uuidv4 } = require('uuid')
const {sql} = require ("../configs/database")
const fs = require('fs')
const { isDate } = require('util/types')

const content = fs.readFileSync('data/categories.json', "utf8")
let categories = JSON.parse(content)

async function readCategory() {
    const result = await sql `select * from category`
    return result;
}

async function createCategory({ name }) {
    const id = uuidv4()
    const result = await sql `insert into category (id, name) values (${id}, ${name})` 
    return id;
}

async function deleteCategory({ id }) {
    const result = await sql `delete from category where id = ${id} `
    return result;
}

async function editCategory({ id, name}) {
    const result = await sql`update category set name = ${name} where id = ${id}`
    return result;
}

module.exports = {
    createCategory,
    deleteCategory,
    editCategory,
    readCategory,
}