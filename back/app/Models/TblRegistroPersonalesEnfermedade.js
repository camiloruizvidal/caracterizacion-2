'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblRegistroPersonalesEnfermedade extends Model {
    static get table()
    {
        return 'tbl_registros_personales_enfermedades'
    }
}

module.exports = TblRegistroPersonalesEnfermedade
