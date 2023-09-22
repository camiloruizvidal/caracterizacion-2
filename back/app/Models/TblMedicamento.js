'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class tbl_medicamentos extends Model {
    static get table () {
        return 'tbl_medicamentos'
      }
}

module.exports = tbl_medicamentos
