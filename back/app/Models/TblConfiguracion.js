'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblConfiguracion extends Model {
	static get table () {
		return 'tbl_configuraciones'
	}
}

module.exports = TblConfiguracion
