'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TblLogSchema extends Schema {
	up () {
		this.create('tbl_logs', (table) => {
			table.increments()
			table.string('name')
			table.text('value')
			table.timestamps()
		})
	}

	down () {
		this.drop('tbl_logs')
	}
}

module.exports = TblLogSchema
