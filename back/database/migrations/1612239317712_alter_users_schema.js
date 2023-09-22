'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterUsersSchema extends Schema {
	up () {
		this.table('users', (table) => {
			table.integer('actual');
		})
	}

	down () {
		this.table('users', (table) => {
			table.dropColumn('actual')
		})
	}
}

module.exports = AlterUsersSchema
