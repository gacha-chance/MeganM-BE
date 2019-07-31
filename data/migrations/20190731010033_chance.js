exports.up = function(knex) {
  return knex.schema.createTable("chanceOfAcquiring", tbl => {
    tbl.increments("id"),
      tbl.decimal("chance"),
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("chanceOfAcquiring");
};
