'use strict'

/*
|--------------------------------------------------------------------------
| TblDepartamentoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')


class TblDepartamentoSeeder {
  async run () {
    await Database
    .from('tbl_departamentos')
    .insert([
      {id:5,nombre:'ANTIOQUIA'},
      {id:8,nombre:'ATLÁNTICO'},
      {id:11,nombre:'BOGOTÁ'},
      {id:13,nombre:'BOLÍVAR'},
      {id:15,nombre:'BOYACÁ'},
      {id:17,nombre:'CALDAS'},
      {id:18,nombre:'CAQUETÁ'},
      {id:19,nombre:'CAUCA'},
      {id:20,nombre:'CESAR'},
      {id:23,nombre:'CÓRDOBA'},
      {id:25,nombre:'CUNDINAMARCA'},
      {id:27,nombre:'CHOCÓ'},
      {id:41,nombre:'HUILA'},
      {id:44,nombre:'LA GUAJIRA'},
      {id:47,nombre:'MAGDALENA'},
      {id:50,nombre:'META'},
      {id:52,nombre:'NARIÑO'},
      {id:54,nombre:'NORTE DE SANTANDER'},
      {id:63,nombre:'QUINDIO'},
      {id:66,nombre:'RISARALDA'},
      {id:68,nombre:'SANTANDER'},
      {id:70,nombre:'SUCRE'},
      {id:73,nombre:'TOLIMA'},
      {id:76,nombre:'VALLE DEL CAUCA'},
      {id:81,nombre:'ARAUCA'},
      {id:85,nombre:'CASANARE'},
      {id:86,nombre:'PUTUMAYO'},
      {id:88,nombre:'ARCHIPIÉLAGO DE SAN ANDRÉS'},
      {id:91,nombre:'AMAZONAS'},
      {id:94,nombre:'GUAINÍA'},
      {id:95,nombre:'GUAVIARE'},
      {id:97,nombre:'VAUPÉS'},
      {id:99,nombre:'VICHADA'},
    ]);
  }
}

module.exports = TblDepartamentoSeeder
