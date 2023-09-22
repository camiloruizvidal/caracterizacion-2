'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblRegistroPersonalesMedicamento extends Model {
    static get table()
    {
        return 'tbl_registros_personales_medicamentos'
    }
}

module.exports = TblRegistroPersonalesMedicamento
