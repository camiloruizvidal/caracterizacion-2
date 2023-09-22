'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblCodigosUsersSchema extends Schema {
	up () {
		this.create('tbl_codigos_users', (table) => {
			table.increments()
			table.integer('user_id').unsigned().notNullable()
			table.integer('inicio')
			table.integer('fin')
			table.timestamps()
		})
	}

	down () {
		this.drop('tbl_codigos_users')
	}
}

module.exports = TblCodigosUsersSchema
