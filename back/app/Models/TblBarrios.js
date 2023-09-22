'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tbl_Barrios extends Model {
	static get table () {
    return 'tbl_barrios'
  }

  tbl_departamento()
  {
      return this.hasOne('App/Models/TblDepartamento','departamento_id','id')
      .select('id','nombre');
  }

  tbl_municipio()
  {
  return this.hasOne('App/Models/TblMunicipio','municipio_id','id')
      .select('id','nombre','estado','departamento_id');
	}
}

module.exports = Tbl_Barrios
