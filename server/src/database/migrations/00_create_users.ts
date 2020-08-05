import Knex from 'knex';

// quais alterações vão ser realizadas no BD
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    })
}

export async function down(knex: Knex) {
    // Deleta a tabela
    return knex.schema.dropTable('users');
}