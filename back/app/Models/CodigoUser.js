'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CodigoUser extends Model {
	static get table () {
		return 'tbl_codigos_users'
	}

	users() {
		return this.belongsTo('App/Models/User')
	}
}

module.exports = CodigoUser
