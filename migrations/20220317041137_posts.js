/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('posts', function(t) {
        t.increments('id').unsigned().primary();
        t.integer('user_id');
        t.string('title');
        t.string('description');
        t.timestamps(true,true);     
       
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
