const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    findBy,
    add,
    remove,
    addChance,
    addRollNum,
    addCompChance,
    // getRollCalculations,
    // getChanceCalculations,
    // getCompCalculations,
    // getCalculations,
    // displayCalculations
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

function addChance(chance) {
    return db('chanceOfAcquiring')
    .insert(chance, 'id')
    .then(chance => {
        const chanceID = chance[0];
        return chanceID;
    })
}

function addRollNum(rollNum) {
    return db('numberOfRolls')
    .insert(rollNum, 'id')
    .then(rollNum => {
        const rollID = rollNum[0];
        return rollID;
    })
}

function addCompChance(compChance) {
    return db('compoundChance')
    .insert(compChance, 'id')
    .then(compChance => {
        const compCID = compChance[0];
        return compCID;
    })
}
