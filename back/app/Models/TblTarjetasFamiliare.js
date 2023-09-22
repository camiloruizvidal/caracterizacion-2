'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblTarjetasFamiliare extends Model {
    static get table () {
        return 'tbl_tarjetas_familiares'
    }

    static scopeSearchByDates(query, start, end)
    {
        return query.whereBetween('created_at', [start, end])
    }

    tbl_registros_personales()
    {
        return this.hasMany('App/Models/TblRegistrosPersonale','id','tarjetas_familiares_id');
    }

    tbl_departamento()
    {
        return this.hasOne('App/Models/TblDepartamento','departamento_id','id')
        .select('id','nombre');
    }

    tbl_municipio()
    {
		return this.hasOne('App/Models/TblMunicipio','municipio_id','id')
        .select('id','nombre','estado','departamento_id');
	}

	tbl_corregimiento()
    {
		return this.hasOne('App/Models/TblCorregimiento','corregimiento_id','id')
        .select('id','nombre');
	}

	tbl_vereda()
    {
		return this.hasOne('App/Models/TblVereda','vereda_id','id')
        .select('id','nombre');
	}

    tbl_mortalidades()
    {
        return this.hasMany('App/Models/TblTarjetasFamiliaresMortalidad','id','tarjetas_familiares_id');
    }
}

module.exports = TblTarjetasFamiliare
