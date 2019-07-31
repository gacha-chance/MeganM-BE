exports.up = function(knex) {
  return knex.schema.createTable("numberOfRolls", tbl => {
    tbl.increments("id"),
      tbl.integer("rollNum"),
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users");
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("numberOfRolls");
};
