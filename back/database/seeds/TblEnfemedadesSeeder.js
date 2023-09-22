'use strict'

/*
|--------------------------------------------------------------------------
| TblEnfemedadeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TblEnfemedadesSeeder {
  async run () {
    await Database
    .from('tbl_enfermedades')
    .insert([
      {nombre:'cancer', codigo:'001'},
      {nombre:'VIH', codigo:'002'},
      {nombre:'anemia', codigo:'003'},
      {nombre:'covid 09', codigo:'004'},
    ]);
  }
}

module.exports = TblEnfemedadesSeeder

