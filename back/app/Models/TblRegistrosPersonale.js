'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblRegistrosPersonale extends Model {
    static get table()
    {
        return 'tbl_registros_personales'
    }

    tbl_persona()
    {
        return this.belongsTo('App/Models/TblPersona', 'personas_id','id')
    }

    tbl_tarjetas_familiares()
    {
    	return this.hasOne('App/Models/TblTarjetasFamiliare','tarjetas_familiares_id','id')
    }

    tbl_enfermedades()
    {
        return this.hasMany('App/Models/TblRegistroPersonalesEnfermedade','id','registros_personales_id');
    }

    tbl_medicamentos()
    {
        return this.hasMany('App/Models/TblRegistroPersonalesMedicamento','id','registros_personales_id');
    }
}

module.exports = TblRegistrosPersonale
