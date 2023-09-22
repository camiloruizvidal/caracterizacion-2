'use strict'

/*
|--------------------------------------------------------------------------
| TblEpssSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class TblEpssSeeder {
  async run () {
    await Database
    .from('tbl_eps')
    .insert([
      {nombre:'A.I.C'},
      {nombre:'ASMET SALUD'},
      {nombre:'AXA COLPATRIA SEGUROS S.A.'},
      {nombre:'COMFENALCO VALLE'},
      {nombre:'COMPENSAR EPS'},
      {nombre:'COOMEVA EPS'},
      {nombre:'CRUZ BLANCA S.A.'},
      {nombre:'EMSSANAR '},
      {nombre:'FAMISANAR'},
      {nombre:'MEDIMAS'},
      {nombre:'NUEVA EPS'},
      {nombre:'S.O.S'},
      {nombre:'SALUD TOTAL'},
      {nombre:'SUSALUD EPS SURA'},
      {nombre:'SANITAS'},
      {nombre:'AIC -RC'},
      {nombre:'ASMET -RC'},
      {nombre:'COMFAMILIAR HUILA RC'},
      {nombre:'COMFAMILIAR NARIÑO -RC'},
      {nombre:'COMPARTA EPS -RC'},
      {nombre:'CONVIDA EPS -RC'},
      {nombre:'COOMEVA EPS -RC'},
      {nombre:'COOSALUD EPS -RC'},
      {nombre:'ECOOPSOS -RC'},
      {nombre:'EMDISALUD  -RC'},
      {nombre:'EMSSANAR  -RC'},
      {nombre:'ESS MALLAMAS -RC'},
      {nombre:'MEDIMAS  -RC'},
      {nombre:'NUEVA EPS -RC'},
      {nombre:'S.O.S -RC'},
      {nombre:'SALUDVIDA -RC'},
      {nombre:'ASOCIACION MUTUAL BARRIOS UNIDOS SA -RC'},
      {nombre:'CAPITAL SALUD -RC'},
      {nombre:'CAPRESOCA -RC'},
      {nombre:'COMFACUNDI -RC'},
      {nombre:'ALIANZA SEGUROS'},
      {nombre:'ASEGURADORA SOLIDARIA DE COLOMBIA'},
      {nombre:'CARDIF COLOMBIA SEGUROS'},
      {nombre:'LA EQUIDAD SEGUROS'},
      {nombre:'LA PREVISORA'},
      {nombre:'LIBERTY SEGUROS'},
      {nombre:'MAPFRE SEGUROS GENERALES'},
      {nombre:'MUNDIAL DE SEGUROS'},
      {nombre:'QBE SEGUROS'},
      {nombre:'SEGUROS BOLIVAR'},
      {nombre:'SEGUROS COLPATRIA'},
      {nombre:'SEGUROS DEL ESTADO'},
      {nombre:'SURAMERICANA DE SEGUROS'},
      {nombre:'ECOPETROL'},
      {nombre:'EJERCITO NACIONAL'},
      {nombre:'POLICIA NACIONAL'},
    ]); 
  }
}

module.exports = TblEpssSeeder
