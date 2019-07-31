exports.up = function(knex) {
  return knex.schema.hasTable("users").then(exists => {
    if (!exists) {
      return knex.schema.createTable("users", tbl => {
        tbl.increments("id"),
          tbl
            .string("username")
            .unique()
            .notNullable(),
          tbl.string("password").notNullable();
      });
    }
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists("users");
};
