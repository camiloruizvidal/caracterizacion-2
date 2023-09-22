'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblMunicipio extends Model {
    static get table () {
      return 'tbl_municipios'
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

}

module.exports = TblMunicipio
