'use strict'

/*
|--------------------------------------------------------------------------
| TblUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TblUserSeeder {
  async run () {
    const Hash = use('Hash')
    const pass = await Hash.make('admin')
    await Database
    .from('users')
    .insert([
      {
        nombre_primero:'Admin',
        nombre_segundo:'Admin',
        apellido_primero:'Admin',
        apellido_segundo:'Admin',
        documento:'1',
        username:'admin',
        email:'admin@admin.com',
        password:pass,
        rol_id:2,
      }
    ])
  }
}

module.exports = TblUserSeeder
