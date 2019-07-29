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
    getRollCalculations,
    getChanceCalculations,
    getCompCalculations,
    getCalculations,
    displayCalculations
}


function find() {
    return db('users')
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

function getChanceCalculations(userId) {
    return db('chanceOfAcquiring')
    .where({ user_id: userId })
    .then(chance => {
        return chance;
    })
}


function getCompCalculations(userId) {
    return db('compoundChance')
    .where({ user_id: userId })
    .then(compChance => {
        return compChance;
    })
}

function getRollCalculations(userId) {
    return db('numberOfRolls')
    .where({ user_id: userId })
    .then(rolls => {
        return rolls;
    })
}


function getCalculations(userId) {
    return db('users')
    .where({ id: userId })
    .first()
    .then(user => {
        return getChanceCalculations(id).then(chance => {
            user.chance = chance;
        })
    })
    .then(user => {
        return getCompCalculations(id).then(compChance => {
            user.compChance = compChance;
        })
    })
    .then(user => {
        return getRollCalculations(id).then(roll => {
            user.roll = roll;
            return user;
        })
    })
}

function displayCalculations(id) {
    return db('users').select('id', 'username')
    .where('id', id)
    .first()
    .then(user => {
        if(user) {
            return getCalculations(id).then(calcs => {
                user.calcs = calcs;
                return user;
            })
        } else {
            return null;
        }
    })
}