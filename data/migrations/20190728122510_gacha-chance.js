
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id'),
        tbl.string('username').unique(),
        tbl.string('password')
    })
    .createTable('chanceOfAcquiring', tbl => {
      tbl.increments('id'),
      tbl.decimal('chance'),
      tbl.integer('user_id').references('id').inTable('users')
    })
    .createTable('compoundChance', tbl => {
      tbl.increments('id'),
      tbl.decimal('compoundedChance'),
      tbl.integer('user_id').references('id').inTable('users')
    })
    .createTable('numberOfRolls', tbl => {
      tbl.increments('id'),
      tbl.integer('rollNum'),
      tbl.integer('user_id').references('id').inTable('users')
    })
};

exports.down = function(knex) {
  dropTableIfExists('users');
  dropTableIfExists('numberOfRolls');
  dropTableIfExists('CompoundChance');
  dropTableIfExists('chanceOfAcquiring')
};
