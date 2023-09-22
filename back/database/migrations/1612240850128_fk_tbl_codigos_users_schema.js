'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FkTblCodigosUsersSchema extends Schema {
	up () {
		this.table('tbl_codigos_users', (table) => {
			table
				.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('SET NULL')
				.alter()
		})
	}

	down () {
		this.table('tbl_codigos_users', (table) => {
			table.dropForeign('user_id')
		})
	}
}

module.exports = FkTblCodigosUsersSchema
