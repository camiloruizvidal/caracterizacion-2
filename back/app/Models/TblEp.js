'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblEp extends Model {
    static get table () {
        return 'tbl_eps'
      }
}

module.exports = TblEp
