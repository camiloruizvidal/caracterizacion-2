'use strict'

/*
|--------------------------------------------------------------------------
| TblMedicamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')


class TblMedicamentoSeeder {
  async run () {
    await Database
    .from('tbl_medicamentos')
    .insert([
      {nombre:'dolex', codigo:'001', presentacion:'pasta',  fabricante:'alianza'},
      {nombre:'acetaminofen', codigo:'002', presentacion:'pasta',  fabricante:'la rebaja'},
      {nombre:'post day', codigo:'003', presentacion:'inyeccion',  fabricante:'alianza'},
      {nombre:'hibuprofeno', codigo:'004', presentacion:'gotas',  fabricante:'alianza'},
    ]);
  }
}

module.exports = TblMedicamentoSeeder
