
exports.up = function(knex) {
    return knex.schema
    .createTable("numberDesired", tbl => {
      tbl.increments("id"),
        tbl.integer("desiredOutcome"),
        tbl
          .integer("user_id")
          .references("id")
          .inTable("users");
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("numberDesired");
};
