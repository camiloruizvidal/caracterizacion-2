'use strict'

/*
|--------------------------------------------------------------------------
| TblCorregimientoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TblCorregimientoSeeder {
  async run () {
    await Database
    .from('tbl_corregimientos')
    .insert([
      {nombre:'prueba1'},
      {nombre:'prueba2'},
    ])
  }
}

module.exports = TblCorregimientoSeeder
