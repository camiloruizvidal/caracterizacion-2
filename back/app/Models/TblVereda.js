'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblVereda extends Model {

    tbl_tarjetas_familiares() {
        return this.hasMany('App/Models/TblTarjetasFamiliare', 'id', 'vereda_id')
        .select('id', 'vereda_id');
    }
}

module.exports = TblVereda
