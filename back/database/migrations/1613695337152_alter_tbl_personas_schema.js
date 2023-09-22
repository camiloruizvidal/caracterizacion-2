'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlterTblPersonasSchema extends Schema {
	up () {
		this.table('tbl_personas', (table) => {
			table.string('grupo_poblacional');
			table.string('etnia');
		})
	}

	down () {
		this.drop('tbl_personas')
	}
}

module.exports = AlterTblPersonasSchema
