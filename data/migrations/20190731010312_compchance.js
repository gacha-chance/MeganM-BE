exports.up = function(knex) {
  return knex.schema.createTable("compoundChance", tbl => {
    tbl.increments("id"),
      tbl.decimal("compoundedChance"),
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("CompoundChance");
};
