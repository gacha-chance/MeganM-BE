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

// TODO: Figure out a better way to write what you want here. 
// TODO: Want to display calculations based on the user id provided
// ? How do I display it as an array attached to a user if I use innerjoin?


function getChanceCalculations(userId) {
    return db('chanceOfAcquiring').select('id', 'chance')
        .where({
            user_id: userId
        })
        .then(chance => {
            return chance;
        })
}


function getCompCalculations(userId) {
    return db('compoundChance').select('id', 'compoundedChance')
        .where({
            user_id: userId
        })
        .then(compoundedChance => {
            return compoundedChance;

        })
}

function getRollCalculations(userId) {
    return db('numberOfRolls').select('id', 'rollNum')
        .where({
            user_id: userId
        })
        .then(rollNum => {
            return rollNum;
        })
}


function getCalculations(userId) {
    return db('users').select('id', 'username')
        .where({
            id: userId
        })
        .first()
        .then(user => {
            return getChanceCalculations(userId).then(chance => {
                user.chance = chance;
                return user;
            })
        })
        .then(user => {
            return getRollCalculations(userId).then(rollNum => {
                user.rollNum = rollNum;
               return user;
            })
        })
        .then(user => {
            return getCompCalculations(userId).then(compoundedChance => {
                user.compoundedChance = compoundedChance;
                return user;
            })
        })
      
}

function displayCalculations(id) {
    return db('users').select('id', 'username')
        .where({
            id
        })
        .first()
        .then(user => {
            if (user) {
                return getCalculations(id).then(calcs => {
                    user = calcs;
                    return user;
                })
            } else {
                return null;
            }
        })
}