'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TblParametrizacion extends Model {
    static get table () {
		return 'tbl_parametrizacion'
	}
}

module.exports = TblParametrizacion
