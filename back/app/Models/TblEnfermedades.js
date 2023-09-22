'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class tbl_enfermedades extends Model {
    static get table () {
        return 'tbl_enfermedades'
      }
}

module.exports = tbl_enfermedades
