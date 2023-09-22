'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblCorregimiento extends Model {
    static get table () {
        return 'tbl_corregimientos'
      }
}

module.exports = TblCorregimiento
