const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    findBy,
    add,
    remove,
}


function find() {
    return db('users').select('id', 'username')
}

function findById(id) {
    return db('users').select('id', 'username')
    .where('id', id)
}

function findBy(filter) {
    return db('users')
    .where(filter)
}


function add(user) {
    return db('users')
    .insert(user, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id)
    })
}

function remove(id) {
    return db('users')
    .where('id', id)
    .del()
}