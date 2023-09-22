'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {
	static get table () {
		return 'tbl_roles'
	}

	users() {
		return this.belongsTo('App/Models/User', 'id', 'rol_id')
	}
}

module.exports = Role
