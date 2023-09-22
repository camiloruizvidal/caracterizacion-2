'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblPersona extends Model {
    static get table ()
    {
        return 'tbl_personas'
    }

    static get computed ()
    {
		return ['fullnombre']
	}

	getFullnombre ({ nombre_primero, nombre_segundo, apellido_primero, apellido_segundo })
	{
		return `${nombre_primero} ${nombre_segundo !== null ? nombre_segundo: ''} ${apellido_primero} ${apellido_segundo !== null ? apellido_segundo: ''}`
	}

    tbl_registro_personal ()
    {
	    return this.belongsTo('App/Models/TblRegistrosPersonale', 'id', 'personas_id')
	}

	static scopeSearchByFullName(query, search)
	{
	    if( !search ) {
	    	return query
	    }

	    search = `%${decodeURIComponent(search.toLowerCase())}%`

	    return query
			.whereRaw('LOWER(nombre_primero) LIKE ?', search)
			.orWhereRaw('LOWER(nombre_segundo) LIKE ?', search)
			.orWhereRaw('LOWER(apellido_primero) LIKE ?', search)
			.orWhereRaw('LOWER(apellido_segundo) LIKE ?', search)
	}
}

module.exports = TblPersona
