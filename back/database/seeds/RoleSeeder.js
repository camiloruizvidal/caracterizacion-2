'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RoleSeeder {
  async run () {
    await Database.table('tbl_roles').insert([
      {
        "name": "Administrador",
      },
      {
        "name": "Caracterizador",
      }
    ]);
  }
}

module.exports = RoleSeeder
