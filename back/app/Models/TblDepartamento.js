'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblDepartamento extends Model {
    static get table () {
        return 'tbl_departamentos'
      }

      static scopeSearchByName(query, search)
      {
          if( !search ) {
            return query
          }

          search = `%${decodeURIComponent(search.toLowerCase())}%`

          return query
          .whereRaw('LOWER(nombre) LIKE ?', search)
      }

      tbl_municipios(){
        return this.hasMany('App/Models/TblMunicipio','id','departamento_id');
      }

      tbl_tarjeta_familiares() {
        return this.belongsTo('App/Models/TblTarjetasFamiliare', 'id', 'departamento_id')
      }
}

module.exports = TblDepartamento
